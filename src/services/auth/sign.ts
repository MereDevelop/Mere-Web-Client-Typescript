import client from '@services/client';
import { TokenResponse } from '@custom/types/common/Token';

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

interface ChangePasswordForm {
  id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

interface RequestChangePassword {
  data: boolean;
}

export async function requestChangePassword(
  authenticateCode: string | undefined,
  changePasswordForm: ChangePasswordForm,
) {
  const response = await client
    .post<RequestChangePassword>(
      '/owner/sign/reset-password',
      changePasswordForm,
      {
        headers: { 'Authorization-Access': authenticateCode },
      },
    )
    .then((resData) => resData);

  return response;
}
