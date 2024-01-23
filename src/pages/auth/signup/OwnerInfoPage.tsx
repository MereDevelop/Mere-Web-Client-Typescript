import OwnerInfo from '@components/auth/signup/OwnerInfo';
import { OwnerInfoProps } from '@custom/types/signup/Signup';
import { verifyNumber } from '@services/auth/signup';
import { signupForm } from '@store/signup-dto';
import { isFailureResponse } from '@utils/checker/common';
import { redirect, useOutletContext } from 'react-router-dom';

const OwnerInfoPage = () => {
  const { isSubmitting } = useOutletContext<OwnerInfoProps>();

  return <OwnerInfo isSubmitting={isSubmitting} />;
};

export default OwnerInfoPage;

export async function ownerInfoSubmit({ request }: { request: Request }) {
  const formData = await request.formData();

  const ownerInfoForm = {
    ownerName: formData.get('ownerName') as string,
    ownerTel: formData.get('ownerPhone') as string,
    representativeName: formData.get('representative-name') as string,
    registrationNo: formData.get('registrationNo') as string,
    accountPW: formData.get('password') as string,
    accountNum: formData.get('account-number') as string,
    accountBank: formData.get('accountBank') as string,
  };

  const { storeInfo, setOwnerInfo } = signupForm.getState();
  setOwnerInfo(ownerInfoForm);

  const verifyCodeDto = {
    authenticateCode: formData.get('verifyPhone') as string,
    storeName: storeInfo.storeName as string,
  };

  const res = await verifyNumber(verifyCodeDto);
  if (isFailureResponse(res)){
    alert('인증번호 오류');
    return null;
  } 
  alert('인증완료');
  return redirect('/signup/checkinfo');
}
