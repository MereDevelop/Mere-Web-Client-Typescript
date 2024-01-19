import { RouteObject } from 'react-router-dom';

import NoticePage, { getNoticeList } from '@pages/owner/NoticePage';

const notice: RouteObject = {
  path: 'notice',
  children: [
    {
      index: true,
      element: <NoticePage />,
      loader: getNoticeList,
    },
  ],
};

export default notice;
