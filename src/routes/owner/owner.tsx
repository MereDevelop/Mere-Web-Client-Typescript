import { RouteObject } from 'react-router-dom';

import HomeLayout, { getOperationStatusLoader } from '@pages/owner/OwnerLayout';

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
      {
        path: 'notice',
      },
    ],
  },
];

export default owner;
