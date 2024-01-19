import { useLoaderData } from 'react-router-typesafe';

import NoticeList from '@components/owner/notice/NoticeList';
import NoticePagination from '@components/owner/notice/NoticePageination';
import { PageData, requestNoticeList } from '@services/owner/notice';
import { isFailureResponse } from '@utils/checker/common';
import '@styles/owner/notice/NoticeLayout.scss';

const NoticePage = () => {
  const { totalPage, pageData, page } = useLoaderData<typeof getNoticeList>();

  return (
    <div className='notice-content-container'>
      <div className='notice-container'>
        <NoticeList pageData={pageData} />
        <NoticePagination totalPage={totalPage} currentPage={Number(page)} />
      </div>
    </div>
  );
};

export default NoticePage;

export async function getNoticeList({ request }: { request: Request }) {
  const url = new URL(request.url);
  const { searchParams } = url;
  const page = Number(searchParams.get('page')) || 1;

  const response = await requestNoticeList(page);
  if (isFailureResponse(response)) return { totalPage: 1, pageData: [], page };

  const { totalPageCount, pageData } = response.data;

  // 전체 페이지 수
  const totalPage = Math.floor(totalPageCount / 12 + 1);
  // 필독 순 정렬
  pageData.sort((prevData: PageData, nextData: PageData) => {
    if (prevData.type === nextData.type) return 0;
    return prevData.type ? -1 : 1;
  });

  return { totalPage, pageData, page };
}
