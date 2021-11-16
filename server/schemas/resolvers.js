const { AuthenticationError } = require('apollo-server-express');
const { User, Questionnaire, Category, Post, Result, Action, Contact, Conversation, Message } = require('../models');
const { signToken } = require('../utils/auth');

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

    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user.id).populate();
    //     return user;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // },

    singleUser: async (parent, { id }) => {
      console.log(id);
      const user = await User.findById(id).populate('answers').populate(`contacts`).populate(`conversations`);
      console.log(user);
      return user;
      // if (context.user) {
      //   const user = await User.findById(context.user.id).populate();
      //   return user;
      // }
      // throw new AuthenticationError('Not logged in');
    },

    singleAction: async (parent, { actionId }) => {
      console.log(actionId);
      const action = await Action.findOne({actionId:actionId})
      return action;
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
    }
    // order: async (parent, { id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user.id).populate({
    //       path: 'orders.products',
    //       populate: 'category',
    //     });

    //     return user.orders.id(id);
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },


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
        // answers: user.answers,
        // actionAnswers: user.actionAnswers
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

    // type Contact {
    //   _id: ID
    //   email: String
    //   name: String
    // }

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
      // const user = Auth(context);
      // if (text.trim() === '') {
        // throw new Error('Post must not be empty');
      // }
      const user = await User.findById(args.userid);

      const newPost =  Post.create({
        post: args.post,
        user: user,
        date: new Date()
      });

      return newPost;
    },
    deletePost: async (parent, { postId }, context) => {
      const user = checkAuth(context);
      try {
        const post = await Post.findById(postId);
        if (user.id === post.user.id) {
          await post.delete();
          return 'Post deleted successfully';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    likePost: async (parent, { postId }, context) => {
      const user = checkAuth(context);

      const post = await Post.findById(postId);
      if (post) {
        if (post.likes.find((like) => like.user.id === user.id)) {
          // Post already likes, unlike it
          post.likes = post.likes.filter((like) => like.user.id !== user.id);
        } else {
          // Not liked, like post
          post.likes.push(user.id);
        }

        await post.save();
        return post;
      } else throw new UserInputError('Post not found');
    }
  },
};

module.exports = resolvers;
