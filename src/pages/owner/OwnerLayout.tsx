import { Outlet } from 'react-router-dom';

import GNB from '@commons/GNB';
import { getStoreOperationStatus } from '@services/owner/store';
import { setOperationStatus } from '@store/operation-status-store';
import '@styles/owner/OwnerLayout.scss';

const HomeLayout = () => {
  return (
    <div className='home-layout-container'>
      <GNB />

      <div className='home-main-container'>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;

export async function getOperationStatusLoader() {
  // 영업 상태를 받아오는 API 연결 필요
  const response = await getStoreOperationStatus();
  const { data: status } = response;

  setOperationStatus(status);

  return null;
}
