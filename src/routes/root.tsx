import { createBrowserRouter, RouteObject } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import auth from './auth/auth';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [...auth],
  },
];

const router = createBrowserRouter(routes);
export default router;
