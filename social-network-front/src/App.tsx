import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ApolloProvider, useReactiveVar } from '@apollo/client';

import { getApolloClient, isUserConnected } from './graphql/apollo/apollo';

import { Toaster } from './components/ui/toaster';

import { AuthProvider, ProtectedRoute } from './components';

import { HomeView, LoginView, RegisterView } from './view';

const App = () => {
  const isAuthenticated = useReactiveVar(isUserConnected);

  return (
    <ApolloProvider client={getApolloClient()}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />

            {/* NOTE: Authentication protected routes  */}
            <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
              <Route path="/home" element={<HomeView />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Toaster />
    </ApolloProvider>
  );
};

export default App;
