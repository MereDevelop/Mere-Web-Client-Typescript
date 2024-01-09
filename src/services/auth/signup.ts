import { CustomError } from '@custom/types/response';
import axios from '@services/config';

// 수정 해야 함
type StoreInfoForm = {
  storeName: FormDataEntryValue | null;
  storePhoneNumber: FormDataEntryValue | null;
  storeAddress: FormDataEntryValue | null;
};

// 수정 예정
export async function requestVerifyStoreInfo(storeInfo: StoreInfoForm) {
  const response = await axios({
    method: 'post',
    url: '/owner/signup/', // 수정 예정
    data: storeInfo,
  }) // 수정 예정
    .then((resData) => {
      const { data, status } = resData;
      const { smsAuthenticatedToken, ownerId } = data;

      return { success: true, smsAuthenticatedToken, ownerId, status };
    })
    .catch((error): CustomError => error);

  return response;
}
