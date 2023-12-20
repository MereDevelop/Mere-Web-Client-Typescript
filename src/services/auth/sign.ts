import { CustomError } from '@custom/types/response';
import { LoginFormData, LoginResponse } from '@custom/types/login/Login';
import axios from '@services/config';

export async function requestSignIn(
  mode: string,
  loginFormData: LoginFormData,
): Promise<LoginResponse | CustomError> {
  const response = await axios({
    method: 'post',
    url: `/${mode}/sign/in`,
    data: loginFormData,
  })
    .then((resData): LoginResponse => {
      const { data, status } = resData;

      return { success: true, data, status };
    })
    .catch((error): CustomError => error);

  return response;
}
