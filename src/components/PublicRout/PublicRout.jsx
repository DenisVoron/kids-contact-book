import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PublicRout = ({ redirectTo = '/', component: Components }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Components;
};
