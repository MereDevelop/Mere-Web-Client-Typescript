import { CustomError } from '@custom/types/response';
import axios from '@services/config';

type ResetPasswordSMSVerificationType = {
  storeAccountId: string;
  phoneNumber: string;
};

export async function requestVerifyNumber(
  data: ResetPasswordSMSVerificationType,
) {
  const response = await axios({
    method: 'post',
    url: '/owner/sign/reset-password/phone-verification-request',
    data,
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
