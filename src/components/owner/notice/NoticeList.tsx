import { Link } from 'react-router-dom';

import { PageData } from '@services/owner/notice';
import '@styles/owner/notice/NoticeList.scss';
import { convertStringToDate } from '@utils/converter';

const NoticeList: React.FC<{ pageData: PageData[] }> = ({ pageData }) => {
  return (
    <div className='notice-list'>
      <div className='notice-header'>
        <h3 className='notice-title'>제목</h3>
        <h3 className='notice-date'>작성일</h3>
      </div>
      {pageData.map((data: PageData) => (
        <div key={data.storeNoticeId} className='notice-content'>
          <div className='notice-title-container'>
            <Link
              to={`/home/notice/${data.storeNoticeId}`}
              className='notice-link'
            >
              {data.type && <p className='must-read-notice'>필독</p>}
              <h3 className='notice-title'>{data.title}</h3>
            </Link>
          </div>
          <h3 className='notice-date'>{convertStringToDate(data.createdAt)}</h3>
        </div>
      ))}
    </div>
  );
};

export default NoticeList;
