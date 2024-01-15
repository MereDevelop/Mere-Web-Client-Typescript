import { SERVER_URL } from '@constants/api';
import { CustomError } from '@custom/types/response';
import { verifyCodeDto, verifyDto } from '@custom/types/signup/Signup';
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

export async function requestVerifyNumber(verifyDto: verifyDto) {
  const response = await axios({
    method: 'post',
    url: `${SERVER_URL}/owner/sign/in/phone-verification-request`,
    data: verifyDto,
  })
    .then((resData) => {
      const { status } = resData;
      return status;
    })
    .catch((error): CustomError => error);

  return response;
}

export async function verifyNumber(verifyCodeDto: verifyCodeDto) {
  const response = await axios({
    method: 'post',
    url: `${SERVER_URL}/owner/sign/in/phone-verification`,
    data: verifyCodeDto,
  })
    .then((resData) => {
      const { status } = resData;
      return status;
    })
    .catch((error): CustomError => error);

  return response;
}
