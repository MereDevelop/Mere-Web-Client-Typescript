import { redirect, useOutletContext } from 'react-router-dom';

import AccountVerification from '@components/auth/account/AccountVerification';
import { requestVerificationUser } from '@services/auth/verification';
import { setUserVerification } from '@store/userVerification-store';
import { isCustomError } from '@utils/check';
import { AccountVerificationProps } from '@custom/types/account/Account';

const AccountVerificationPage = () => {
  const { isSubmitting, apiErrors } =
    useOutletContext<AccountVerificationProps>();

  return (
    <AccountVerification isSubmitting={isSubmitting} apiErrors={apiErrors} />
  );
};

export default AccountVerificationPage;

export async function verificationUser({ request }: { request: Request }) {
  const formData = await request.formData();

  const verificationUserForm = {
    authenticateCode: formData.get('verificationNumber'),
    phoneNumber: formData.get('ownerPhone'),
    storeAccountId: formData.get('storeID'),
  };

  const response = await requestVerificationUser(verificationUserForm);

  if (isCustomError(response)) return response;
  setUserVerification(response.smsAuthenticatedToken, response.ownerId);

  return redirect('./reset');
}
