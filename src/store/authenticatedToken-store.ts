import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthenticatedTokenStore {
  smsAuthenticatedToken: string | undefined;
}

const useAuthenticatedTokenStore = create<AuthenticatedTokenStore>()(
  devtools(
    (): AuthenticatedTokenStore => ({
      smsAuthenticatedToken: undefined,
    }),
    { name: 'requestId-store' },
  ),
);

export function setAuthenticatedToken(authenticateCode: string) {
  useAuthenticatedTokenStore.setState(
    () => ({ smsAuthenticatedToken: authenticateCode }),
    false,
    'requestId/setRequestId',
  );
}

export function getRequestId() {
  return useAuthenticatedTokenStore.getState().smsAuthenticatedToken;
}
