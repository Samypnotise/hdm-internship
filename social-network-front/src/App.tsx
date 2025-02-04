import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginView, RegisterView } from './view';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({});

const client = new ApolloClient({ uri: 'graphql', cache });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
