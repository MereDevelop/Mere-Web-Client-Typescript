import { RouteObject } from 'react-router-dom';

import LoginPage, {
  loader as confirmLoginMode,
  action as loginAction,
} from '@pages/auth/LoginPage';

const loginRoute: RouteObject = {
  index: true,
  element: <LoginPage />,
  loader: confirmLoginMode,
  action: loginAction,
};

export default loginRoute;
