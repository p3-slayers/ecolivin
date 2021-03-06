const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload

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
    answers: [Answer]
  }

  type Post {
    id: ID
    post: String
    date: String
    user: User
  }

  type Challenge {
    challengeId: String
    title: String
    challenge: String
    dateStart: String
    dateEnd: String
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


  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String
    user: User
  }

  type Query {
    categories: [Category]
    questionnaire: [Questionnaire]
    question(_id: ID!): Questionnaire
    user: User
    getUserConversations(email: String!): [Conversation]
    getResults: [Result]
    getPosts: [Post]
    getPost(postId: ID!): Post
    singleUser(id: ID!): User
    singleAction(actionId: String!): Action
    getChallenges: [Challenge]
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

    updatePassword(
      _id: ID!
      password: String!
      oldPassword: String!
    ): User

    addNewContact(
      _id: ID!
      email: String!
      name: String!
    ): User

    addNewConversation(
      recipients: [String]!
    ): Conversation

    addMessageToConversation(
      recipients: [String]!
      sender: String!
      text: String
    ): Conversation

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

    uploadPicture(
      file: Upload!
      id: String!
    ): File!

    login(email: String!, password: String!): Auth
    addPost(
      post: String!
      userid: String!
      ): Post!
  }
`;

module.exports = typeDefs;
