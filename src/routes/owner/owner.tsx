import { RouteObject } from 'react-router-dom';

import HomeLayout, { getOperationStatusLoader } from '@pages/owner/OwnerLayout';
import sales from './sales';
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
      sales,
      {
        path: 'store',
      },
      notice,
    ],
  },
];

export default owner;
