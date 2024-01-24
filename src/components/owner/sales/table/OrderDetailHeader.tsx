const OrderDetailHeader = () => {
  return (
    <div className='table-header-layout'>
      <h3 className='deposit-scheduled'>입금예정일</h3>
      <h3 className='order-period'>주문기간</h3>
      <h3 className='division'>구분</h3>
      <h3 className='payment-status'>지급상태</h3>
      <h3 className='detail-order'>주문별 상세</h3>
    </div>
  );
};

export default OrderDetailHeader;
