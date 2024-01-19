import { Link } from 'react-router-dom';

const NoticePagination: React.FC<{
  totalPage: number;
  currentPage: number;
}> = ({ totalPage, currentPage }) => {
  const pageList = [];
  for (let i = 1; i <= totalPage; i += 1) {
    pageList.push(i);
  }

  return (
    <div className='notice-page-container'>
      {pageList.map((page) => (
        <Link
          key={page}
          to={`?page=${page}`}
          className={`notice-page ${
            page === currentPage ? 'notice-page__active' : ''
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default NoticePagination;
