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
    salary: Number!
    description: String!
    location: String!
    skills: [String]
    tasks: [String]
    contacts: [Contact]
    Upload: [Upload]
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    contact(id: ID!): Contact
    contacts: [Contact]
    job(id: ID!): Job
    jobs: [Job]
  }

  type Mutation {
    createContact(name: String!, cellphone: String!, email: String!, title: String!, companyId: ID): Contact!
    updateContact(id: ID!, name: String, cellphone: String, email: String, title: String, companyId: ID): Contact!
    deleteContact(id: ID!): Contact
  }

`






module.exports = typeDefs;
