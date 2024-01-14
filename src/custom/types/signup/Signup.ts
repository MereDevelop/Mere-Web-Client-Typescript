export type SignupStatusType = 'signup' | 'ownerInfo' | 'wait';

export type StoreInfoProps = {
  isSubmitting: boolean;
};

export type OwnerInfoProps = {
  isSubmitting: boolean;
};

export type verifyDto = {
  phoneNumber: string;
  storeName: string;
};

export type verifyCodeDto = {
  authenticateCode: string;
  storeName: string;
};
