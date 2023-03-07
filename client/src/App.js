import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';

// Import components
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import JobTrack from './Pages/JobTrack';
import JobDetails from './Pages/JobDetails';


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
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/JobTrack' element={<JobTrack />} />
          <Route exact path='/JobDetails' element={<JobDetails />} />
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
