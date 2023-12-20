import { CustomError } from '@custom/types/response';
import axios from '@services/config';

export async function requestVerificationNumber(
  storeId: string,
  ownerPhone: string,
) {
  const response = await axios({
    method: 'post',
    url: '/owner/sign/reset-password/phone-verification-request',
    data: {
      storeAccountId: storeId,
      phoneNumber: ownerPhone,
    },
  })
    .then((resData) => {
      const { data, status } = resData;
      const { requestId } = data;

      return { success: true, requestId, status };
    })
    .catch((error): CustomError => {
      const { status, data } = error.response;
      const { errorCode, errorMessage } = data;

      return { success: false, errorCode, errorMessage, status };
    });

  return response;
}
