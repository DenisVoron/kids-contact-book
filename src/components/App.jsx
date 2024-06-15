import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operation';
import { DrawerAppBar } from './Layout/Layout';
import { PrivateRout } from './PrivateRout';
import { PublicRout } from './PublicRout';
import { Loader } from './Loader';

const HomePage = lazy(() => import('page/Home'));
const ContactsPage = lazy(() => import('page/Contacts'));
const LoginPage = lazy(() => import('page/LogIn'));
const RegisterPage = lazy(() => import('page/Register'));
const NotFoundPage = lazy(() => import('page/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<DrawerAppBar />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRout redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="login"
          element={
            <PublicRout redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <PublicRout redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
