require(`dotenv`).config();

const { AuthenticationError } = require('apollo-server-express');
const { User, Questionnaire, Category, Post, Result, Action, Contact, Conversation, Message, Challenge } = require('../models');
const { signToken } = require('../utils/auth');

const path = require(`path`);
const fs = require(`fs`);
const aws = require(`aws-sdk`)

const { GraphQLUpload } = require('graphql-upload')

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

console.log(bucketName)
console.log(region)
console.log(accessKeyId)
console.log(secretAccessKey)

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey
})

const resolvers = {
  Query: {
    categories: async () => Category.find(),
    questionnaire: async (parent, { category, text }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (text) {
        params.text = {
          $regex: text,
        };
      }

      return Questionnaire.find(params).populate('category');
    },
    question: async (parent, { id }) =>
      Questionnaire.findById(id).populate('category'),


    singleUser: async (parent, { id }) => {
      console.log(id);
      const user = await User.findById(id).populate('answers').populate(`contacts`).populate(`conversations`);
      console.log(user);
      return user;
    },

    singleAction: async (parent, { actionId }) => {
      console.log(actionId);
      const action = await Action.findOne({actionId:actionId})
      return action;
    },

    getUserConversations: async (parent, { email }) => {
      try {
        const conversationsByUser = await Conversation.find({ recipients: {$all: [ email ]} })
  
        return conversationsByUser
        
      } catch (err) {
        console.log(err)
      }
    },

    getResults: async () => { 
      const results = Result.find();
      return results;  
    },
    
    getPosts: async () => { 
      const posts = Post.find().populate(`user`).sort({date: -1});
       return posts;  
      },
    
    getPost: async (parent, {postId} ) => {
      const post = await Post.findById(postId);
      if (post) {
        return post;
      } else {
        throw new Error('Post not found');
      }
    },

    getChallenges: async () => { 
      const challenges = Challenge.find().populate(`user`).sort({date: -1});
       return challenges;  
      },
  },
  
  Mutation: {
    addUser: async (parent, args) => {
      console.log("AddUser", args, 'test');
      // args includes all fields submitted from signup
      const user = await User.create(args);

      const userWithoutPassword = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      console.log("UserWithoutPassword", userWithoutPassword);

      const token = signToken(userWithoutPassword);
      console.log(token)
      return { token, user: userWithoutPassword };
    },

    addResult: async (parent, args) => {
      console.log(args, 'test');
      // args includes all fields submitted from signup
      const result = await Result.create(args);

      console.log(result);

      return result;
    },

    updateUser: async (parent, args) => {
      return User.findByIdAndUpdate(args._id, args, {
        new: true,
      }).populate('answers').populate(`contacts`).populate(`conversations`);
    },
    
    updatePassword: async (parent, args) => {
      const user = await User.findById(args._id);
      const correctPw = await user.isCorrectPassword(args.oldPassword);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      return User.findByIdAndUpdate(args._id, args, {
        new: true,
      });
    },

    addNewContact: async (parent, args) => {
      console.log(`addNewContact SLAPPED`)
      console.log(args)
      try {
        const userWithAddedContact = await User.findByIdAndUpdate(args._id, {
          $push :{
            contacts: 
              {email: args.email, name: args.name}
            }
        }, {
          new: true,
        }).populate('answers').populate(`contacts`).populate(`conversations`);
        console.log(userWithAddedContact)
        return userWithAddedContact
    
      } catch (err) {
        console.log(err)
      }
    },

    addNewConversation: async (parent, args) => {
      try {
        const newConversation = await Conversation.create({
          messages: [],
          recipients: args.recipients
        })
        console.log(newConversation)
        
        return newConversation;
        
      } catch (err) {
        console.log(err);
      }
    },

    addMessageToConversation: async (parent, args) => {
      try {
        const updatedConversation = await Conversation.findOneAndUpdate(
          { recipients: { $all: args.recipients } },
          {
            $push : {
              messages:
              {
                sender: args.sender,
                text: args.text
              }
            }
          }, 
          {
            new: true
          })
          console.log(updatedConversation)
          console.log(updatedConversation.messages[updatedConversation.messages.length - 1])
          
          return updatedConversation;
          
        } catch (err) {
          console.log(err)
        }
    },

    deleteUser: async (parent, args)=>{
      return User.findByIdAndDelete(args._id)
    },

    uploadPicture: async (parent, { file, id }) => {
      console.log(`uploadPicture Fired!`)
      const { createReadStream, filename, mimetype, encoding } = await file;

      console.log(file)
      console.log(`\n\n*********ID IS AS FOLLOWS********\n\n${id}\n\n`)

      // upload to aws
      const { Location } = await s3.upload({
          Bucket: bucketName,
          Body: createReadStream(),
          Key: `${Date.now()}-${filename}`,
          ContentType: mimetype
      }).promise()  

      console.log(Location)

      // Set Location as User profileImage attribute
      const user = await User.findByIdAndUpdate(id, {
        profileImage: Location
      }, { new: true })
      
      return {
        filename,
        mimetype,
        encoding,
        url: Location,
        user: user
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const userWithoutPassword = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        conversations: user.conversations,
        contacts: user.contacts,
        answers: user.answers,
        actionAnswers: user.actionAnswers
      };

      console.log(userWithoutPassword);

      const token = signToken(userWithoutPassword);

      return { token, user: userWithoutPassword };
    },

    addPost: async (parent, args) => {
    
      const user = await User.findById(args.userid);

      const newPost =  Post.create({
        post: args.post,
        user: user,
        date: new Date()
      });

      return newPost;
    },
   
},

  Upload: GraphQLUpload

};

module.exports = resolvers;
