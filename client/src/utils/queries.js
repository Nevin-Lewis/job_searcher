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