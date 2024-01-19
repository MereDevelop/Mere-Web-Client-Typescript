import { RouteObject } from 'react-router-dom';

import HomeLayout, { getOperationStatusLoader } from '@pages/owner/OwnerLayout';
import notice from './notice';

const owner: RouteObject[] = [
  {
    path: 'owner',
    element: <HomeLayout />,
    loader: getOperationStatusLoader,
    children: [
      {
        index: true,
      },
      {
        path: 'menu',
      },
      {
        path: 'sales',
      },
      {
        path: 'store',
      },
      notice,
    ],
  },
];

export default owner;
