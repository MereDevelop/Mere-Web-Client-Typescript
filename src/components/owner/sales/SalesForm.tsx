import { v4 } from 'uuid';

import '@styles/owner/sales/SalesForm.scss';

const SalesForm = () => {
  return (
    <form className='sales-date-form'>
      <div className='sales-date-query'>
        <div className='start-date'>
          <select className='start-year'>
            {[2020, 2021, 2022, 2023].map((year) => (
              <option key={v4()}>{year}</option>
            ))}
          </select>
          <select className='start-month'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((month) => (
              <option key={v4()}>{month}</option>
            ))}
          </select>
          <p className='date-divider'>부터</p>
        </div>
        <div className='end-date'>
          <select className='end-year'>
            {[2020, 2021, 2022, 2023].map((year) => (
              <option key={v4()}>{year}</option>
            ))}
          </select>
          <select className='end-month'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((month) => (
              <option key={v4()}>{month}</option>
            ))}
          </select>
          <p className='date-divider'>까지</p>
        </div>
      </div>
      <button type='submit' className='sales-query-btn'>
        조회하기
      </button>
    </form>
  );
};

export default SalesForm;
