import { Outlet, useNavigation } from 'react-router-dom';
import { useLoaderData } from 'react-router-typesafe';

import AccountStatus from '@components/auth/account/AccountStatus';
import { AccountStatusType } from '@custom/types/account/Account';

const AccountPage = () => {
  const currentStatus = useLoaderData<typeof loadCurrentStatus>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className='account-container'>
      <AccountStatus currentStatus={currentStatus} />
      <Outlet context={{ isSubmitting }} />
    </div>
  );
};

export default AccountPage;

export async function loadCurrentStatus({ request }: { request: Request }) {
  const { pathname } = new URL(request.url);
  const currentStatus = pathname.split('/').slice(-1)[0] as AccountStatusType;

  return currentStatus;
}
