type SettlementStatementType = {
  orderPrice: string;
  bossDiscount: string;
  orderBrokerageFee: string;
  depositAmount: string;
};

const SettlementStatement: React.FC<SettlementStatementType> = ({
  orderPrice,
  bossDiscount,
  orderBrokerageFee,
  depositAmount,
}) => {
  return (
    <div className='table-main-layout'>
      <h3 className='order-price'>{orderPrice}원</h3>
      <div className='col-2-layout'>
        <h3 className='boss-discount'>{bossDiscount}</h3>
        <h3 className='order-brokerage-fee'>{orderBrokerageFee}</h3>
      </div>
      <h3 className='deposit-amount'>{depositAmount}원</h3>
      <h3 className='deducted-cost'>
        <button className='detail-download' type='button'>
          다운로드
        </button>
      </h3>
    </div>
  );
};

export default SettlementStatement;
