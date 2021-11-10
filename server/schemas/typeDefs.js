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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    questionnaire: [Questionnaire]
    question(_id: ID!): Questionnaire
    user: User
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
  }
`;

module.exports = typeDefs;
