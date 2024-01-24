import '@styles/owner/sales/SalesTable.scss';

const DUMMY_MAIN = [
  {
    id: 1,
    depositDate: '2023-01-01',
    startPeriod: '2022-12-15',
    endPeriod: '2020-12-20',
    division: 'AA',
    paymentStatus: '미지급',
    orderPrice: 'N',
    deductedCost: 'N',
    bossDiscount: 'N',
    orderBrokerageFee: 'N',
    depositAmount: 'N',
  },
  {
    id: 2,
    depositDate: '2023-01-01',
    startPeriod: '2022-12-15',
    endPeriod: '2020-12-20',
    division: 'AA',
    paymentStatus: '지급대기',
    orderPrice: 'N',
    deductedCost: 'N',
    bossDiscount: 'N',
    orderBrokerageFee: 'N',
    depositAmount: 'N',
  },
  {
    id: 3,
    depositDate: '2023-01-01',
    startPeriod: '2022-12-15',
    endPeriod: '2020-12-20',
    division: 'AA',
    paymentStatus: '지급완료',
    orderPrice: 'N',
    deductedCost: 'N',
    bossDiscount: 'N',
    orderBrokerageFee: 'N',
    depositAmount: 'N',
  },
  {
    id: 4,
    depositDate: '2023-01-01',
    startPeriod: '2022-12-15',
    endPeriod: '2020-12-20',
    division: 'AA',
    paymentStatus: '지급완료',
    orderPrice: 'N',
    deductedCost: 'N',
    bossDiscount: 'N',
    orderBrokerageFee: 'N',
    depositAmount: 'N',
  },
  {
    id: 5,
    depositDate: '2023-01-01',
    startPeriod: '2022-12-15',
    endPeriod: '2020-12-20',
    division: 'AA',
    paymentStatus: '지급완료',
    orderPrice: 'N',
    deductedCost: 'N',
    bossDiscount: 'N',
    orderBrokerageFee: 'N',
    depositAmount: 'N',
  },
];

const SalesTable = () => {
  return (
    <div className='sales-main-table'>
      <div className='table-content-container'>
        <div className='table-header-layout'>
          <h3 className='deposit-scheduled'>입금예정일</h3>
          <h3 className='order-period'>주문기간</h3>
          <h3 className='division'>구분</h3>
          <h3 className='payment-status'>지급상태</h3>
          <h3 className='detail-order'>주문별 상세</h3>
        </div>
        {DUMMY_MAIN.map((data) => {
          let paymentStatusColor = '#000';

          if (data.paymentStatus === '미지급') paymentStatusColor = '#FF5A69';
          else if (data.paymentStatus === '지급대기')
            paymentStatusColor = '#898C9A';

          return (
            <div key={data.id} className='table-main-layout'>
              <h3 className='deposit-scheduled'>{data.depositDate}</h3>
              <div className='order-period'>
                <h3 className='start-period'>{data.startPeriod}</h3>
                <h3 className='end-period'>~ {data.endPeriod}</h3>
              </div>
              <h3 className='division'>
                {data.division[0]}
                <br />
                {data.division[1]}
              </h3>
              <h3
                className='payment-status'
                style={{ color: paymentStatusColor }}
              >
                {data.paymentStatus}
              </h3>
              <h3 className='detail-order'>
                <button className='detail-download' type='button'>
                  다운로드
                </button>
              </h3>
            </div>
          );
        })}
      </div>

      <div className='table-content-container'>
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
        {DUMMY_MAIN.map((data) => (
          <div key={data.id} className='table-main-layout'>
            <h3 className='order-price'>{data.orderPrice}원</h3>
            <div className='col-2-layout'>
              <h3 className='boss-discount'>{data.bossDiscount}</h3>
              <h3 className='order-brokerage-fee'>{data.orderBrokerageFee}</h3>
            </div>
            <h3 className='deposit-amount'>{data.depositAmount}원</h3>
            <h3 className='deducted-cost'>
              <button className='detail-download' type='button'>
                다운로드
              </button>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesTable;
