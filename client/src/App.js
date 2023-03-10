import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import components
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
// import JobTrack from './Pages/JobTrack';
import JobDetails from './Pages/JobDetails';
import Profile from './Pages/Profile';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <Router>

        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            {/* <Route exact path='/JobTrack' element={<JobTrack />} /> */}
            <Route exact path='/JobDetails' element={<JobDetails />} />
            <Route exact path='/Profile' element={<Profile />} />
          </Routes>
        </>
      </Router>


    </ApolloProvider>
  );
}

export default App;
