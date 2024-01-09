import { createBrowserRouter, RouteObject } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import auth from './auth/auth';
import owner from './owner/owner';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [...auth, ...owner],
  },
];

const router = createBrowserRouter(routes);
export default router;
