import { gql } from '@apollo/client';

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

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