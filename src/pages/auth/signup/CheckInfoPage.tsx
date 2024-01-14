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
  signupInfo.accountBank = bankNameToNumber[signupInfo.accountBank];
  const res = await requestSignup(signupInfo);

  if (res === 200) {
    return redirect('/signup/wait');
  }
  alert('회원가입 중 오류가 발생하였습니다.');
  return null;
}

const bankNameToNumber: {
  [key: string]: number; // string 타입의 key를 가질 수 있도록 추가.
  NH농협: number;
  카카오뱅크: number;
  KB국민: number;
  신한: number;
  우리: number;
  IBK기업: number;
  하나: number;
  새마을금고: number;
  농축협: number;
  SC제일: number;
  경남: number;
  광주: number;
  제주: number;
  전북: number;
  씨티: number;
  KDB산업: number;
  수협은행: number;
  BOA: number;
  중국공상: number;
  HSBC: number;
  중국건설: number;
  도이치: number;
  BNP파리바: number;
  JP모간: number;
} = {
  NH농협: 0,
  카카오뱅크: 1,
  KB국민: 2,
  신한: 3,
  우리: 4,
  IBK기업: 5,
  하나: 6,
  새마을금고: 7,
  농축협: 8,
  SC제일: 9,
  경남: 10,
  광주: 11,
  제주: 12,
  전북: 13,
  씨티: 14,
  KDB산업: 15,
  수협은행: 16,
  BOA: 17,
  중국공상: 18,
  HSBC: 19,
  중국건설: 20,
  도이치: 21,
  BNP파리바: 22,
  JP모간: 23,
};
