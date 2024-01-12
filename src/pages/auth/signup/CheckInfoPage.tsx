import CheckInfoForm from '@components/auth/signup/CheckInfoForm';
import { SignupInfo, signupForm } from '@store/signup-dto';
import { useLoaderData } from 'react-router-dom';

const CheckInfoPage = () => {
  const signupInfo = useLoaderData() as SignupInfo | null;
  return signupInfo ? <CheckInfoForm signupInfo={signupInfo} /> : null;
};

export default CheckInfoPage;

export async function loadSignupForm() {
  const { getSignupInfo } = signupForm.getState();
  const signupInfo: SignupInfo = getSignupInfo(); // 작성한 회원가입 폼 가져오기
  console.log(signupInfo);
  return signupInfo;
}
