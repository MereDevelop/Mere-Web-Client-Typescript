import { CustomError } from '@custom/types/response';
import {
  LoginForm,
  ChangePasswordForm,
  LoginResponse,
} from '@custom/types/login/Login';
import axios from '@services/config';

export async function requestSignIn(
  mode: string,
  loginFormData: LoginForm,
): Promise<LoginResponse | CustomError> {
  const response = await axios({
    method: 'post',
    url: `/${mode}/sign/in`,
    data: loginFormData,
  })
    .then((resData): LoginResponse => {
      const { data, status } = resData;
      axios.defaults.headers['Authorization-Access'] =
        data.accessTokenDto.accessToken;

      return { success: true, data, status };
    })
    .catch((error): CustomError => error);

  return response;
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
  })
    .then((resData) => {
      const { data, status } = resData;

      return { success: true, data, status };
    })
    .catch((error): CustomError => error);

  return response;
}
