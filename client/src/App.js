import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import './App.css';
import About from './Pages/About'
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './Pages/Home';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
=======
import CreateAccount from './Pages/CreateAccount'
import Login from './Pages/Login'
import Options from './Pages/Options.js';
import { Button } from "./components/Button";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
>>>>>>> ce501244e3fdbfe2eff0804355728c152d3176d1


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Options />
          <Footer />
        </div>
       </Router>
    </ApolloProvider>
  );
}

export default App;
