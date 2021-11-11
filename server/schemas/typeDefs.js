const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Questionnaire {
    _id: ID
    text: String
    category: Category
  }

  type Answer {
    _id: ID
    answers: Int
    questions: [Questionnaire]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    profileImage: String
    answers: [Answer]
  }

  type Post {
    id: ID
    post: String
    date: String
    user: User
    comments: [Comment]
    likes: [Like]
  }

  type Comment {
    id: ID
    date: String
    user: User
    text: String!
  }

  type Like {
    id: ID
    user: User
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    questionnaire: [Questionnaire]
    question(_id: ID!): Questionnaire
    user: User
    getPosts: [Post]
    getPost(postId: ID!): Post
    singleUser(id: ID!): User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      profileImage: String
    ): Auth

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      profileImage: String
    ): User

    login(email: String!, password: String!): Auth
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

module.exports = typeDefs;
