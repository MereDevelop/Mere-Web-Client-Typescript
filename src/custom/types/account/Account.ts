import { CustomError } from '../response';

export type AccountStatusType = 'account' | 'reset';

export type AccountVerificationProps = {
  isSubmitting: boolean;
  apiErrors: CustomError | undefined;
};
