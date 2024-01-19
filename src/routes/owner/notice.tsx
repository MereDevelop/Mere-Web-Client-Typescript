import { RouteObject } from 'react-router-dom';

import NoticePage, { getNoticeList } from '@pages/owner/NoticePage';
import NoticeDetailPage, {
  getNoticeDetail,
} from '@pages/owner/NoticeDetailPage';

const notice: RouteObject = {
  path: 'notice',
  children: [
    {
      index: true,
      element: <NoticePage />,
      loader: getNoticeList,
    },
    {
      path: ':noticeId',
      element: <NoticeDetailPage />,
      loader: getNoticeDetail,
    },
  ],
};

export default notice;
