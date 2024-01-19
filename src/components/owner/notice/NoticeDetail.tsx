import { NoticeDetail as NoticeDetailType } from '@services/owner/notice';
import '@styles/owner/notice/NoticeDetail.scss';
import {
  convertStringToClockTime,
  convertStringToDate,
} from '@utils/converter';

const NoticeDetail: React.FC<{ notice: NoticeDetailType }> = ({ notice }) => {
  const { type, title, updatedAt, storeNoticeUrls, contents } = notice;
  const updateTime = `${convertStringToDate(
    updatedAt,
  )} ${convertStringToClockTime(updatedAt)}`;

  return (
    <div className='notice-post-container'>
      <div className='notice-header'>
        <div className='notice-title-container'>
          {type && <p className='must-read-notice'>필독</p>}
          <h1 className='post-title'>{title}</h1>
        </div>
        <p className='post-date'>{updateTime}</p>
      </div>

      <div className='notice-content'>
        {storeNoticeUrls.map((url: string) => (
          <div key={url} className='content-element content-image-container'>
            <img src={url} alt='notice 1' className='content-image' />
          </div>
        ))}
        <div className='content-element'>
          <p className='content-text'>{contents}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
