import { redirect, useOutletContext } from 'react-router-dom';
import { OwnerInfoProps } from '@custom/types/signup/Signup';
import { signupForm } from '@store/signup-dto';
import OwnerInfo from '@components/auth/signup/OwnerInfo';

const OwnerInfoPage = () => {
  const { isSubmitting } = useOutletContext<OwnerInfoProps>();

  return <OwnerInfo isSubmitting={isSubmitting} />;
};

export default OwnerInfoPage;

export async function ownerInfoSubmit({ request }: { request: Request }) {
  const formData = await request.formData();
  // 수정 필요
  const ownerInfoForm = {
    ownerName: formData.get('ownerName') as string,
    ownerTel: formData.get('ownerPhone') as string,
    representativeName: formData.get('representative-name') as string,
    registrationNo: formData.get('registrationNo') as string,
    accountPW: formData.get('password') as string,
    accountNum: formData.get('account-number') as string,
    accountBank: formData.get('accountBank') as string,
  };

  const { setOwnerInfo } = signupForm.getState();
  setOwnerInfo(ownerInfoForm);

  return redirect('/signup/checkinfo');
}
