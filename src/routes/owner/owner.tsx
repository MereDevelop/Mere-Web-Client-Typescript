import { RouteObject } from 'react-router-dom';

import HomeLayout, { getOperationStatusLoader } from '@pages/owner/OwnerLayout';

const owner: RouteObject[] = [
  {
    path: 'owner',
    element: <HomeLayout />,
    loader: getOperationStatusLoader,
  },
];

export default owner;
