const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    input bookInput {
        bookId: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String, email: String, password: String): Auth
        login(email: String, password: String): Auth
        saveBook(bookData: bookInput): User
        removeBook(bookId: ID): User
    }
`

    module.exports = typeDefs;
