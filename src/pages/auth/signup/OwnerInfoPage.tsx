import { redirect, useOutletContext } from 'react-router-dom';
import { isCustomError } from '@utils/check';
import StoreInfo from '@components/auth/signup/StoreInfo';
import { StoreInfoProps } from '@custom/types/signup/Signup';
import { requestVerifyStoreInfo } from '@services/auth/signup';

const OwnerInfoPage = () => {
  const { isSubmitting } = useOutletContext<StoreInfoProps>();

  return <StoreInfo isSubmitting={isSubmitting} />;
};

export default OwnerInfoPage;

export async function ownerInfoSubmit({ request }: { request: Request }) {
  const formData = await request.formData();

  // 수정 필요
  const storeInfoForm = {
    storeName: formData.get('store-name'),
    storePhoneNumber: formData.get('store-phone-number'),
    storeAddress: formData.get('store-address'),
  };

  const response = await requestVerifyStoreInfo(storeInfoForm);

  if (isCustomError(response)) return response;

  return redirect('./ownerInfo');
}
