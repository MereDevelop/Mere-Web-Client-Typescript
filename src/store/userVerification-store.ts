import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserVerificationStore {
  authenticateCode: string | undefined;
  storeId: string | undefined;
}

const useUserVerificationStore = create<UserVerificationStore>()(
  devtools(
    (): UserVerificationStore => ({
      authenticateCode: undefined,
      storeId: undefined,
    }),
    { name: 'verification-store' },
  ),
);

export function setUserVerification(
  authenticateCode: string | undefined,
  storeId: string | undefined,
) {
  useUserVerificationStore.setState(
    () => ({ authenticateCode, storeId }),
    false,
    'verification/setVerificationInfo',
  );
}

export function getUserVerification(): UserVerificationStore {
  return useUserVerificationStore.getState();
}
