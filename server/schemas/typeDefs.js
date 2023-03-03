const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        jobs: [Job]
        
    }

  type Contact {
    _id: ID!
    name: String!
    cellphone: String!
    email: String!
    title: String!
    company: Job
  }

  type Job {
    _id: ID!
    company: String!
    title: String!
    jobPostLink: String!
    salary: Int!
    description: String!
    location: String!
    uploads: Upload
    skills: [String]
    tasks: [String]
    contacts: [Contact]
  }
  type Upload {
    _id: ID!
    type: String!
    filename: String!
    job: Job
  }

  type Auth {
    token: String!
    user: User!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input JobInput {
    company: String!
    title: String!
    jobPostLink: String!
    salary: Int!
    description: String!
    location: String!
    uploads: UploadInput
    skills: [String]
    tasks: [String]
  }

  type Query {
    me: User
    contact(_id: ID!): Contact
    contacts: [Contact]
    job(_id: ID!): Job
    jobs: [Job]
  }

  type Mutation {
    addContact(name: String!, cellphone: String!, email: String!, 
      title: String!, companyId: ID): Contact!
    updateContact(_id: ID!, name: String, cellphone: String, email: String, 
      title: String, companyId: ID): Contact!
    deleteContact(_id: ID!): Contact

    addJob(input: JobInput!): Job!
    updateJob(id: ID!, input: JobInput!): Job!
    deleteJob(id: ID!): Job!

    addUser(input: UserInput!): User!
    updateJob(id: ID!, input: UserInput!): User!
    deleteJob(id: ID!): Job!
  }

`;


module.exports = typeDefs;
