const { AuthenticationError } = require('apollo-server-express');
const { User, Questionnaire, Category, Order } = require('../models');
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
      console.log(args, 'test');
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

      console.log(userWithoutPassword);

      const token = signToken(userWithoutPassword);

      return { token, userWithoutPassword };
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

      const userWithoutPassword = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // answers: user.answers,
        // actionAnswers: user.actionAnswers
      };

      console.log(userWithoutPassword);

      const token = signToken(userWithoutPassword);

      return { token, user: userWithoutPassword };
    },
  },
};

module.exports = resolvers;
