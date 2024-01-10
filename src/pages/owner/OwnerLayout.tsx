import { Outlet, redirect } from 'react-router-dom';

import GNB from '@commons/GNB';
import { requestStoreOperationStatus } from '@services/owner/store';
import '@styles/owner/OwnerLayout.scss';
import { isFailureResponse } from '@utils/check';
import { useLoaderData } from 'react-router-typesafe';

const HomeLayout = () => {
  const operationStatus = useLoaderData<typeof getOperationStatusLoader>();

  return (
    <div className='home-layout-container'>
      <GNB operationStatus={operationStatus} />

      <div className='home-main-container'>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;

export async function getOperationStatusLoader() {
  const response = await requestStoreOperationStatus();

  if (isFailureResponse(response)) return redirect('/');
  return response.data;
}
