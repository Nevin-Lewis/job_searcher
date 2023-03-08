import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
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
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser($updateUserId: ID!, $input: UserInput!) {
  updateUser(id: $updateUserId, input: $input) {
    _id
    email
    password
    username
    jobs {
      _id
      company
      description
      salary
    }
  }
}

`;

export const DELETE_USER = gql`
mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    _id
    email
    password
    username
  }
}

`;

export const ADD_CONTACT = gql`
mutation AddContact($name: String!, $cellphone: String!, $email: String!, $title: String!, $companyId: ID) {
  addContact(name: $name, cellphone: $cellphone, email: $email, title: $title, companyId: $companyId) {
    _id
    cellphone
    company {
      _id
    }
    email
    name
    title
  }
}

`;

export const UPDATE_CONTACT = gql`
mutation UpdateContact($id: ID!, $name: String, $cellphone: String, $email: String, $title: String, $companyId: ID) {
  updateContact(_id: $id, name: $name, cellphone: $cellphone, email: $email, title: $title, companyId: $companyId) {
    _id
    cellphone
    company {
      _id
    }
    email
    name
    title
  }
}
`;

export const DELETE_CONTACT = gql`
mutation DeleteContact($id: ID!) {
  deleteContact(_id: $id) {
    _id
  }
}

`;

export const ADD_JOB = gql`
mutation AddJob($input: JobInput!) {
  addJob(input: $input) {
    _id
    company
    description
    jobPostLink
    location
    salary
    title
    skills
    tasks
    contacts {
      _id
      cellphone
      email
      name
      title
    }
  }
}

`;

export const UPDATE_JOB = gql`
mutation UpdateJob($updateJobId: ID!, $input: JobInput!) {
  updateJob(id: $updateJobId, input: $input) {
    _id
    company
    description
    jobPostLink
    location
    salary
    contacts {
      _id
      email
      name
      title
      cellphone
    }
    skills
    tasks
    title
  }
}

`;

export const DELETE_JOB = gql`
mutation DeleteJob($deleteJobId: ID!) {
  deleteJob(id: $deleteJobId) {
    _id
  }
}

`;