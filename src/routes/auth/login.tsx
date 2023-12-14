import { RouteObject } from 'react-router-dom';

import LoginPage, { loader as confirmLoginMode } from '@pages/auth/LoginPage';

const loginRoute: RouteObject = {
  index: true,
  element: <LoginPage />,
  loader: confirmLoginMode,
};

export default loginRoute;
