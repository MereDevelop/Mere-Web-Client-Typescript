import { redirect, useOutletContext } from 'react-router-dom';

import Verification from '@components/auth/account/Verification';
import { requestVerificationUser } from '@services/auth/verification';
import { setUserVerification } from '@store/userVerification-store';
import { isCustomError } from '@utils/check';
import { VerificationProps } from '@custom/types/account/Account';

const VerificationPage = () => {
  const { isSubmitting, responseError } = useOutletContext<VerificationProps>();

  return (
    <Verification isSubmitting={isSubmitting} responseError={responseError} />
  );
};

export default VerificationPage;

export async function verificationUser({ request }: { request: Request }) {
  const formData = await request.formData();

  const verificationUserForm = {
    authenticateCode: formData.get('verificationNumber'),
    phoneNumber: formData.get('ownerPhone'),
    storeAccountId: formData.get('storeID'),
  };

  const response = await requestVerificationUser(verificationUserForm);

  if (isCustomError(response)) return response;
  setUserVerification(
    response.smsAuthenticatedToken,
    verificationUserForm.storeAccountId as string,
  );

  return redirect('./reset');
}
