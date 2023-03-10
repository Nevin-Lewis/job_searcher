import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      Job {
        _id
        company
        title
        jobPostLink
        salary
        description
        location
        uploads
        skills
        tasks
        contacts
      }
    }
  }
`;

export const QUERY_CONTACT = gql`
  query getContact($_id: ID!) {
    contact(_id: $_id) {
      _id
      name
      cellphone
      email
      title
      company
    }
  }
`;

export const QUERY_CONTACTS = gql`
  query getContacts {
    contacts {
      _id
      name
      cellphone
      email
      title
      company
    }
  }
`;

export const QUERY_JOB = gql`
  query getJob($_id: ID!) {
    Job(_id: $_id) {
      _id
      company
      title
      jobPostLink
      salary
      description
      location
      uploads
      skills
      tasks
      contacts
    }
  }
`;

export const QUERY_JOBS = gql`
  query {
    jobs {
      _id
      company
      title
      jobPostLink
      salary
      description
      location
      skills
      tasks
      jobStage
      contacts {
        _id
        name
      }
    }
  }
  `;