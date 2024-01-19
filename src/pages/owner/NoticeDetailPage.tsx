import { Params, redirect } from 'react-router-dom';
import { useLoaderData } from 'react-router-typesafe';

import NoticeDetail from '@components/owner/notice/NoticeDetail';
import { requestNoticeDetail } from '@services/owner/notice';
import '@styles/owner/notice/NoticeDetailLayout.scss';
import { isFailureResponse } from '@utils/checker/common';

const NoticeDetailPage = () => {
  const { notice } = useLoaderData<typeof getNoticeDetail>();

  return (
    <div className='notice-detail-container'>
      <NoticeDetail notice={notice} />
    </div>
  );
};

export default NoticeDetailPage;

export async function getNoticeDetail({ params }: { params: Params }) {
  const { noticeId } = params;

  // 해당 공지사항 게시글의 id를 이용해 데이터 받아오기
  const response = await requestNoticeDetail(noticeId);
  if (isFailureResponse(response)) return redirect('/owner/notice');

  return { notice: response.data };
}
