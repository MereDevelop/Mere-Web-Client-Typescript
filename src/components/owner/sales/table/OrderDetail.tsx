type OrderDetailType = {
  depositDate: string;
  startPeriod: string;
  endPeriod: string;
  division: string;
  paymentStatus: string;
};

const OrderDetail: React.FC<OrderDetailType> = ({
  depositDate,
  startPeriod,
  endPeriod,
  division,
  paymentStatus,
}) => {
  const paymentStatusColor =
    paymentStatus === '미지급'
      ? '#FF5A69'
      : paymentStatus === '지급대기'
      ? '#898C9A'
      : '#000';

  return (
    <div className='table-main-layout'>
      <h3 className='deposit-scheduled'>{depositDate}</h3>
      <div className='order-period'>
        <h3 className='start-period'>{startPeriod}</h3>
        <h3 className='end-period'>~ {endPeriod}</h3>
      </div>
      <h3 className='division'>
        {division[0]}
        <br />
        {division[1]}
      </h3>
      <h3 className='payment-status' style={{ color: paymentStatusColor }}>
        {paymentStatus}
      </h3>
      <h3 className='detail-order'>
        <button className='detail-download' type='button'>
          다운로드
        </button>
      </h3>
    </div>
  );
};

export default OrderDetail;
