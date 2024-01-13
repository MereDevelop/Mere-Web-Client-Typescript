import CheckInfoForm from '@components/auth/signup/CheckInfoForm';
import { requestSignup } from '@services/auth/signup';
import { SignupInfo, signupForm } from '@store/signup-dto';
import { redirect, useLoaderData } from 'react-router-dom';

const CheckInfoPage = () => {
  const signupInfo = useLoaderData() as SignupInfo | null;
  return signupInfo ? <CheckInfoForm signupInfo={signupInfo} /> : null;
};

export default CheckInfoPage;

export async function loadSignupForm() {
  const { getSignupInfo } = signupForm.getState();
  const signupInfo: SignupInfo = getSignupInfo(); // 작성한 회원가입 폼 가져오기
  return signupInfo;
}

export async function signupRequest() {
  const { getSignupInfo } = signupForm.getState();
  const signupInfo: SignupInfo = getSignupInfo();
  const res = await requestSignup(signupInfo);

  if (res === 200) {
    return redirect('/signup/wait');
  }
  alert('회원가입 중 오류가 발생하였습니다.');
  return null;
}
