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
        id
        name
      }
			conversations {
        messages {
          sender
          text
        }
        recipients
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
  {
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