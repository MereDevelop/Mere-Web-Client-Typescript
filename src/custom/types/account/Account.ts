import { CustomError } from '../response';

export type AccountStatusType = 'account' | 'reset';

export type VerificationProps = {
  isSubmitting: boolean;
  responseError: CustomError | undefined;
};
