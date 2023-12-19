import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-typesafe';

import AccountStatus from '@components/auth/account/AccountStatus';
import { AccountStatusType } from '@custom/types/account/Account';

const AccountPage = () => {
  const currentStatus = useLoaderData<typeof loadCurrentStatus>();

  return (
    <div className='account-container'>
      <AccountStatus currentStatus={currentStatus} />
      <Outlet />
    </div>
  );
};

export default AccountPage;

export async function loadCurrentStatus({ request }: { request: Request }) {
  const { pathname } = new URL(request.url);
  const currentStatus = pathname.split('/').slice(-1)[0] as AccountStatusType;

  return currentStatus;
}
