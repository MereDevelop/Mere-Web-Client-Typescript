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
    ownerName: formData.get('ownerName'),
    ownerTel: formData.get('ownerTel'),
    representativeName: formData.get('representativeName'),
    registrationNo: formData.get('registrationNo'),
    accountPW: formData.get('accountPW'),
    accountNum: formData.get('accountNum'),
    accountBank: formData.get('accountBank'),
  };

  const { setOwnerInfo } = signupForm.getState();
  setOwnerInfo(ownerInfoForm);

  return redirect('./ownerinfo');
}
