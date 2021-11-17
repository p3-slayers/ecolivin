import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
  query singleUser($id: ID!) {
    singleUser(id: $id) {
      _id
      firstName
      lastName
      email
      profileImage
    	contacts {
        email
        name
      }
    
      answers {
        answers
        questions {
          text
          category {
            name
          }
        }
      }
    }
  }`;

export const QUERY_USER_CONVERSATIONS = gql`
  query getUserConversations($email: String!) {
    getUserConversations(email: $email) {
      _id
      recipients
      messages {
        _id
        sender
        text
      }
    }
  }
`

export const QUERY_SINGLE_ACTION = gql`
  query singleAction($actionId: String){
    singleAction(actionId: $actionId){
      name
      description
    }
  }
`;


export const QUERY_ALL_POSTS = gql`
  {
    getPosts {
      id
      post
      date
      user
      likes {
        user
      }
      comments {
        id
        user
        date
        text
      }
    }
  }
`;


export const getAllPosts = gql`
query getAllPosts{
  getPosts {
    id
    post
    date
    user{
      _id
      firstName
      lastName
    }
    likes {
      user{
      firstName
      lastName
    }
    }
    comments {
      id
      user{
      firstName
    }
      date
      text
    }
  }
}
`;


export const QUERY_ALL_RESULTS = gql`
query getAllResults {
    getResults {
      id
      food
      waste
      transportation
      lifestyle
      housing
    }
  }
`;