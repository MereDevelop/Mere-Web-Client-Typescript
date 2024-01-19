import client from '@services/client';

export interface PageData {
  createdAt: string;
  storeNoticeId: number;
  title: string;
  type: boolean;
}

interface RequestNoticeList {
  pageData: PageData[];
  totalPageCount: number;
}

export async function requestNoticeList(page: number) {
  const response = await client
    .get<RequestNoticeList>(`/notice/store?limit=12&offset=${page - 1}`)
    .then((resData) => resData);

  return response;
}

export interface NoticeDetail extends PageData {
  contents: string;
  storeNoticeUrls: string[];
  updatedAt: string;
  views: number;
}

export async function requestNoticeDetail(noticeId: string | undefined) {
  const response = await client
    .get<NoticeDetail>(`/notice/store/information?storeNoticeId=${noticeId}`)
    .then((resData) => resData);

  return response;
}
