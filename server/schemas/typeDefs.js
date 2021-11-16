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

  type Contact {
    _id: ID
    email: String
    name: String
  }

  type Message {
    _id: ID
    sender: String
    text: String
  }

  type Conversation {
    _id: ID
    messages: [Message]
    recipients: [String]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    profileImage: String
    contacts: [Contact]
    conversations: [Conversation]
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

  type Result {
    id: ID
    waste: Float!
    transportation: Float!
    food: Float!
    lifestyle: Float!
    housing: Float!
  }

  type Action {
    id: ID
    actionId: String
    name: String
    description: String
    category: Category
  }

  type Query {
    categories: [Category]
    questionnaire: [Questionnaire]
    question(_id: ID!): Questionnaire
    user: User
    getResults: [Result]
    getPosts: [Post]
    getPost(postId: ID!): Post
    singleUser(id: ID!): User
    singleAction(actionId: String!): Action
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
      _id: ID!
      firstName: String
      lastName: String
      email: String
      password: String
      profileImage: String
    ): User

    addNewContact(
      _id: ID!
      email: String!
      name: String!
    ): User

    deleteUser(
      _id: ID!
    ): User

    addResult(
      waste: Float!
      transportation: Float!
      food: Float!
      lifestyle: Float!
      housing: Float!
    ):Result

    login(email: String!, password: String!): Auth
    addPost(
      post: String!
      userid: String!
      ): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

module.exports = typeDefs;
