import { CustomError } from '@custom/types/response';
import { LoginFormData, LoginResponse } from '@custom/types/login/Login';
import axios from '@services/config';

export async function requestSignIn(
  loginFormData: LoginFormData,
): Promise<LoginResponse | CustomError> {
  const response = await axios({
    method: 'post',
    url: '/owner/sign/in',
    data: loginFormData,
  })
    .then((resData): LoginResponse => {
      const { data, status } = resData;

      return { success: true, data, status };
    })
    .catch((error): CustomError => {
      const { status, data } = error.response;
      const { errorCode, errorMessage } = data;

      return { success: false, errorCode, errorMessage, status };
    });

  return response;
}
