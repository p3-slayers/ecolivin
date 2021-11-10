const { AuthenticationError } = require('apollo-server-express');
const { User, Questionnaire, Category, Post } = require('../models');
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

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id).populate();
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },

    getPosts: async () => { 
      const posts = Post.find().sort({date: -1});
       return posts;  
      },
    
    getPosts: async (parent, {postId} ) => {
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
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const order = new Order({ products });

    //     await User.findByIdAndUpdate(context.user.id, {
    //       $push: { orders: order },
    //     });

    //     return order;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },
    // updateProduct: async (parent, { id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return Product.findByIdAndUpdate(
    //     id,
    //     { $inc: { quantity: decrement } },
    //     { new: true }
    //   );
    // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    createPost: async (parent, { text }, context) => {
      const user = checkAuth(context);
      if (text.trim() === '') {
        throw new Error('Post must not be empty');
      }

      const newPost = new Post({
        text,
        user: user.firstName + user.lastName,
        date: new Date().toISOString()
      });

      const post = await newPost.save();
      return post;
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
        if (post.likes.find((like) => like.username === username)) {
          // Post already likes, unlike it
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          // Not liked, like post
          post.likes.push({
            username,
            createdAt: new Date().toISOString()
          });
        }

        await post.save();
        return post;
      } else throw new UserInputError('Post not found');
    }
  },
};

module.exports = resolvers;
