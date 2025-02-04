import { Navigate } from 'react-router';

import { useReactiveVar } from '@apollo/client';

import { isUserConnected } from '@/graphql/apollo/apollo';

import LoginForm from './LoginForm';

const LoginView = () => {
  const isAuthenticated = useReactiveVar(isUserConnected);

  if (isAuthenticated) {
    return <Navigate to={'/home'} replace />;
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginView;
