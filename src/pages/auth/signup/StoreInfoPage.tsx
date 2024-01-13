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
    storeName: formData.get('storeName') as string,
    storeTel: formData.get('storePhone') as string,
    city: (formData.get('storeAddress') as string).split(' ')[0],
    jibunAddress: formData.get('storeAddress') as string,
    detailAddress: formData.get('storeAddressDetail') as string,
    roadAddress: formData.get('storeAddress') as string,
    latitude: 0,
    longitude: 0,
  };
  console.log(storeInfoForm);

  const { setStoreInfo } = signupForm.getState();
  setStoreInfo(storeInfoForm);

  return redirect('./ownerinfo');
}
