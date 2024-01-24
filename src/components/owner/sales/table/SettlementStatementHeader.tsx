const SettlementStatementHeader = () => {
  return (
    <div className='table-header-layout'>
      <h3 className='order-price'>
        주문금액<span className='alpha'>(A)</span>
      </h3>
      <div className='row-2-layout'>
        <h3 className='row-1-deducted-cost'>
          차감비용<span className='alpha'>(B)</span>
        </h3>
        <div className='row-2-deducted-cost'>
          <h3 className='boss-discount'>
            사장님자체할인<span className='alpha'> B1</span>
          </h3>
          <h3 className='order-brokerage-fee'>
            주문 중개이용료<span className='alpha'> B2</span>
          </h3>
        </div>
      </div>
      <h3 className='deposit-amount'>
        입금금액<span className='alpha'>(A-B)</span>
      </h3>
      <h3 className='sales-statement'>정산내역서</h3>
    </div>
  );
};

export default SettlementStatementHeader;
