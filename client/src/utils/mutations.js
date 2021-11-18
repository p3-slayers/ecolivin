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
        contacts {
          email
          name
        }
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
    ) {
      _id
    	firstName
    	lastName
    	email
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
  	$_id: ID!
    $password: String!
  	$oldPassword: String!
  ) {
    updatePassword(
      _id: $_id
      password: $password
      oldPassword: $oldPassword
    ) {
      _id
    	firstName
    	lastName
    	email
    }
  }
`;

export const ADD_NEW_CONTACT = gql`
  mutation addNewContact(
    $_id: ID!
    $email: String!
    $name: String!
  ) {
    addNewContact(
      _id:$_id
      email:$email
      name:$name
    ) {
      contacts {
        email
        name
      }
    }
  }
  `;

export const UPLOAD_PROFILE_PIC = gql`
  mutation uploadPicture(
  $file: Upload!
  $id: String!
  ) {
    uploadPicture(
      file: $file
      id: $id
  ) {
      filename
      mimetype
      encoding
      url
      user {
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
    }
  }
`

export const DELETE_USER= gql`
  mutation deleteUser($_id:ID!){
    deleteUser(_id:$_id){
    _id
    }
  }
`;

export const ADD_NEW_CONVERSATION = gql`
  mutation addNewConversation(
    $recipients: [String]!
  ) {
    addNewContact(
      recipients: $recipients
    ) {
      _id
      recipients 
      messages {
        sender
        text
      }
    }
  }
  `;

export const ADD_MESSAGE_TO_CONVERSATION = gql`
  mutation addMessageToConversation(
    $recipients: [String]!
    $sender: String!
    $text: String
  ) {
    addMessageToConversation(
      recipients: $recipients
      sender: $sender
      text: $text
    ) {
      _id
      recipients 
      messages {
        sender
        text
      }
    }
  }
`

export const ADD_POST = gql`
mutation addPost(
  $post: String!
  $userid: String!
) {
  addPost(
    post: $post
    userid: $userid
  ) {
    post
  }
}
`;


