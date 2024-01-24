import '@styles/owner/sales/SalesTable.scss';
import OrderDetailHeader from './table/OrderDetailHeader';
import OrderDetail from './table/OrderDetail';
import SettlementStatementHeader from './table/SettlementStatementHeader';
import SettlementStatement from './table/SettlementStatement';

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
        <OrderDetailHeader />
        {DUMMY_MAIN.map((data) => (
          <OrderDetail
            key={data.id}
            depositDate={data.depositDate}
            startPeriod={data.startPeriod}
            endPeriod={data.endPeriod}
            division={data.division}
            paymentStatus={data.paymentStatus}
          />
        ))}
      </div>

      <div className='table-content-container'>
        <SettlementStatementHeader />
        {DUMMY_MAIN.map((data) => (
          <SettlementStatement
            key={data.id}
            orderPrice={data.orderPrice}
            bossDiscount={data.bossDiscount}
            orderBrokerageFee={data.orderBrokerageFee}
            depositAmount={data.depositAmount}
          />
        ))}
      </div>
    </div>
  );
};

export default SalesTable;
