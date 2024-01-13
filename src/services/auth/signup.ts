import { SERVER_URL } from '@constants/api';
import { CustomError } from '@custom/types/response';
import axios from '@services/config';
import { SignupInfo } from '@store/signup-dto';

export async function requestSignup(signupForm: SignupInfo) {
  const response = await axios({
    method: 'post',
    url: `${SERVER_URL}/owner/sign/up`,
    data: signupForm,
  })
    .then((resData) => {
      const { status } = resData;
      return status;
    })
    .catch((error): CustomError => error);

  return response;
}
