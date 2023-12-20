import { CustomError } from '@custom/types/response';
import axios from '@services/config';

type VerificationUserFormType = {
  authenticateCode: FormDataEntryValue | null;
  phoneNumber: FormDataEntryValue | null;
  storeAccountId: FormDataEntryValue | null;
};

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
    .catch((error): CustomError => error);

  return response;
}

export async function requestVerificationUser(
  verificationUserForm: VerificationUserFormType,
) {
  const response = await axios({
    method: 'post',
    url: '/owner/sign/reset-password/phone-number/verification',
    data: verificationUserForm,
  })
    .then((resData) => {
      const { data, status } = resData;
      const { smsAuthenticatedToken } = data;

      return { success: true, smsAuthenticatedToken, status };
    })
    .catch((error): CustomError => error);

  return response;
}
