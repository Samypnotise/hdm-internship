import React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import './assets/global.css';

const cache = new InMemoryCache({});
const link = new HttpLink();

const apolloClient = new ApolloClient({
  cache,
  link,
});

const App = () => (
  <ApolloProvider client={apolloClient}>
    <p>Social network</p>
  </ApolloProvider>
);

export default App;
