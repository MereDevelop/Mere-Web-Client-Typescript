import { redirect, useNavigation } from 'react-router-dom';

import PasswordReset from '@components/auth/account/PasswordReset';
import { requestChangePassword } from '@services/auth/sign';
import { getUserVerification } from '@store/userVerification-store';
import { isFailureResponse } from '@utils/check';

const PasswordResetPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return <PasswordReset isSubmitting={isSubmitting} />;
};

export default PasswordResetPage;

export async function checkAuthenticatedToken() {
  const { authenticateCode } = getUserVerification();

  // 임의로 URL을 조작해서 페이지로 이동하는 경우
  if (!authenticateCode) {
    alert('잘못된 접근입니다.');
    return redirect('/');
  }

  return null;
}

export async function changePassword({ request }: { request: Request }) {
  const formData = await request.formData();
  const { authenticateCode, storeId } = getUserVerification();

  const changePasswordForm = {
    id: storeId,
    password: formData.get('password'),
  };

  const response = await requestChangePassword(
    authenticateCode,
    changePasswordForm,
  );

  if (isFailureResponse(response)) return response;

  return redirect('/');
}
