import client from '@services/crud';
import { TokenResponse } from '@custom/types/common/Token';
import axios from '@services/config';

interface LoginForm {
  id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export async function requestSignIn(mode: string, loginFormData: LoginForm) {
  const response = await client
    .post<TokenResponse>(`/${mode}/sign/in`, loginFormData)
    .then((resData) => resData);

  return response;
}

// export async function requestChangePassword(
//   authenticateCode: string | undefined,
//   changePasswordForm: ChangePasswordForm,
// ) {
//   const response = await axios({})
// };

interface ChangePasswordForm {
  id: string | undefined;
  password: FormDataEntryValue | null;
}

export async function requestChangePassword(
  authenticateCode: string | undefined,
  changePasswordForm: ChangePasswordForm,
) {
  const response = await axios({
    method: 'post',
    url: '/owner/sign/reset-password',
    data: changePasswordForm,
    headers: {
      'Authorization-Access': authenticateCode,
    },
  }).then((resData) => {
    const { data, status } = resData;

    return { success: true, data, status };
  });

  return response;
}
