import React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import { BrowserRouter, Route, Routes } from 'react-router';

import './assets/global.css';
import { LoginView } from './view';

const cache = new InMemoryCache({});
const link = new HttpLink();

const apolloClient = new ApolloClient({
  cache,
  link,
});

const App = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
