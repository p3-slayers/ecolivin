import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        profileImage
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
        profileImage
      }
    }
  }
`;

export const ADD_RESULT = gql`
  mutation addResult($food: Float!, $transportation: Float!, $lifestyle: Float!, $waste: Float!, $housing: Float!) {
    addResult(food: $food, waste: $waste, transportation: $transportation, lifestyle: $lifestyle, housing: $housing) {
      food
      waste
      transportation
      lifestyle
      housing
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
  	$_id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  	$profileImage: String
  ) {
    updateUser(
      _id: $_id
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      profileImage: $profileImage
    ){
      _id
    	firstName
    	lastName
    	email
    }
  }
`;