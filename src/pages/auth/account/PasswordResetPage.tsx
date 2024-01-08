import { redirect, useNavigation } from 'react-router-dom';
import { useActionData } from 'react-router-typesafe';

import PasswordReset from '@components/auth/account/PasswordReset';
import { AUTHENTICATE_ERROR } from '@constants/error/token';
import { AuthenticateErrorCodeType } from '@custom/types/error/errorCode';
import { requestChangePassword } from '@services/auth/sign';
import { getUserVerification } from '@store/userVerification-store';
import { isCustomError } from '@utils/check';

const PasswordResetPage = () => {
  const errorCode = useActionData<typeof changePassword>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return <PasswordReset isSubmitting={isSubmitting} errorCode={errorCode} />;
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

  if (isCustomError(response)) return response;
  if (isAuthenticateError(response.data.errorCode))
    return response.data.errorCode;

  return redirect('/');
}

export function isAuthenticateError(
  errorCode: string,
): errorCode is AuthenticateErrorCodeType {
  if (errorCode in AUTHENTICATE_ERROR) return true;
  return false;
}
