import SalesHeader from '@components/owner/sales/SalesHeader';
import SalesForm from '@components/owner/sales/SalesForm';
import SalesTable from '@components/owner/sales/SalesTable';
import '@styles/owner/sales/SalesLayout.scss';

const SalesPage = () => {
  return (
    <div className='sales-content-container'>
      <SalesHeader />

      <div className='sales-table-container'>
        <SalesForm />
        <SalesTable />
      </div>
    </div>
  );
};

export default SalesPage;
