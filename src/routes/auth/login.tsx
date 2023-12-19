import { RouteObject } from 'react-router-dom';

import LoginPage, {
  loadUserLoginData,
  action as loginAction,
} from '@pages/auth/LoginPage';

const loginRoute: RouteObject = {
  index: true,
  element: <LoginPage />,
  loader: loadUserLoginData,
  action: loginAction,
};

export default loginRoute;
