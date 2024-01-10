import { redirect, useOutletContext } from 'react-router-dom';
import StoreInfo from '@components/auth/signup/StoreInfo';
import { StoreInfoProps } from '@custom/types/signup/Signup';
import { signupForm } from '@store/signup-dto';

const StoreInfoPage = () => {
  const { isSubmitting } = useOutletContext<StoreInfoProps>();

  return <StoreInfo isSubmitting={isSubmitting} />;
};

export default StoreInfoPage;

export async function storeInfoSubmit({ request }: { request: Request }) {
  const formData = await request.formData();

  // 수정 필요
  const storeInfoForm = {
    storeName: formData.get('storeName'),
    storeTel: formData.get('storePhone'),
    jibunAddress: formData.get('storeAddress'),
    detailAddress: formData.get('storeAddressDetail'),
  };

  const { setStoreInfo } = signupForm.getState();
  setStoreInfo(storeInfoForm);

  return redirect('./ownerinfo');
}
