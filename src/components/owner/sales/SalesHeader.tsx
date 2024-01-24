import '@styles/owner/sales/SalesHeader.scss';

const SalesHeader = () => {
  return (
    <div className='sales-header-container'>
      <div className='sales-title-container'>
        <h1 className='sales-store-name'>비둘기는멍청해보여</h1>
        <button className='sales-button' type='button'>
          정산내역서 받기
        </button>
      </div>
      <div className='sales-total-container'>
        <div className='sales-deposit-schedule'>
          <h3 className='total-message'>입금예정금액</h3>
          <h2 className='total-price'>nnn,nnn 원</h2>
        </div>
        <div className='sales-deposit-completed'>
          <h3 className='total-message'>입금완료금액</h3>
          <h2 className='total-price'>nnn,nnn 원</h2>
        </div>
        <div className='sales-deducted-schedule'>
          <h3 className='total-message'>차감예정금액</h3>
          <h2 className='total-price'>nnn,nnn 원</h2>
        </div>
      </div>
    </div>
  );
};

export default SalesHeader;
