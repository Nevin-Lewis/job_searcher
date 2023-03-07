import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }  
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`

`;

export const DELETE_USER = gql`

`;

export const ADD_CONTACT = gql`

`;

export const UPDATE_CONTACT = gql`

`;

export const DELETE_CONTACT = gql`

`;

export const ADD_JOB = gql`

`;

export const UPDATE_JOB = gql`

`;

export const DELETE_JOB = gql`

`;