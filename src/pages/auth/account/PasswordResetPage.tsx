import { redirect, useNavigation } from 'react-router-dom';

import PasswordReset from '@components/auth/account/PasswordReset';
import { requestChangePassword } from '@services/auth/sign';
import {
  getUserVerification,
  setUserVerification,
} from '@store/userVerification-store';
import { isFailureResponse } from '@utils/checker/common';
import { useLoaderData } from 'react-router-typesafe';

const PasswordResetPage = () => {
  const { authenticateCode, storeId } =
    useLoaderData<typeof checkAuthenticatedToken>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <PasswordReset
      isSubmitting={isSubmitting}
      authenticateCode={authenticateCode}
      storeId={storeId}
    />
  );
};

export default PasswordResetPage;

export async function checkAuthenticatedToken() {
  const { authenticateCode, storeId } = getUserVerification();
  setUserVerification(undefined, undefined);

  // 임의로 URL을 조작해서 페이지로 이동하는 경우
  if (!authenticateCode) {
    alert('잘못된 접근입니다.');
    return redirect('/');
  }

  return { authenticateCode, storeId };
}

export async function changePassword({ request }: { request: Request }) {
  const formData = await request.formData();

  const authenticateCode = formData.get('storeId') as string;
  const changePasswordForm = {
    id: formData.get('storeId'),
    password: formData.get('password'),
  };

  const response = await requestChangePassword(
    authenticateCode,
    changePasswordForm,
  );

  if (isFailureResponse(response)) return response;

  return redirect('/');
}
