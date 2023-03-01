import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import NavBar from './components/NavBar';
import './App.css';

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <NavBar />
        <Routes>
          {/* <Route exact path='/' component={SearchBooks} /> */}

        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
