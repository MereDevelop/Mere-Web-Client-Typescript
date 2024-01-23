import { verifyCodeDto, verifyDto } from '@custom/types/signup/Signup';
import client from '@services/client';
import { SignupInfo } from '@store/signup-dto';

interface ResponseForm {
  requestId: string;
  requestTime: string;
  statusCode: string;
  statusName: string;
}

export async function requestSignup(signupForm: SignupInfo) {
  const response = await client.post<ResponseForm>(`/owner/sign/up`,signupForm)
  .then((resData) => resData);
  
  return response;
}

export async function requestVerifyNumber(verifyDto: verifyDto) {
  const response = await client.post<ResponseForm>(`/owner/sign/in/phone-verification-request`,verifyDto)
  .then((resData) => resData);

  return response;
}
export async function verifyNumber(verifyCodeDto: verifyCodeDto) {
  const response = await client.post<ResponseForm>(`/owner/sign/in/phone-verification`,verifyCodeDto)
  .then((resData) => resData);
  
  return response;
}