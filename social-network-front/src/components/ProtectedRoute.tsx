import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  isAllowed: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAllowed }) => {
  return isAllowed ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
