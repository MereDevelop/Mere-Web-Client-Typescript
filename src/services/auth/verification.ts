import client from '@services/client';

interface RequestVerificationNumber {
  requestId: string;
  requestTime: string;
  statusCode: string;
  statusName: string;
}

export async function requestVerificationNumber(
  storeId: string,
  ownerPhone: string,
) {
  const response = await client
    .post<RequestVerificationNumber>(
      '/owner/sign/reset-password/phone-verification-request',
      {
        storeAccountId: storeId,
        phoneNumber: ownerPhone,
      },
    )
    .then((resData) => resData);

  return response;
}

interface VerificationUserFormType {
  authenticateCode: FormDataEntryValue | null;
  phoneNumber: FormDataEntryValue | null;
  storeAccountId: FormDataEntryValue | null;
}

interface RequestVerificationUser {
  ownerId: number;
  statusCode: string;
  statusName: string;
  smsAuthenticatedToken: string;
}

export async function requestVerificationUser(
  verificationUserForm: VerificationUserFormType,
) {
  const response = await client
    .post<RequestVerificationUser>(
      '/owner/sign/reset-password/phone-number/verification',
      verificationUserForm,
    )
    .then((resData) => resData);

  return response;
}
