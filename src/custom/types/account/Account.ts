import { FailureResponse } from '../common/Response';

export type AccountStatusType = 'account' | 'reset';

export type VerificationProps = {
  isSubmitting: boolean;
  responseError: FailureResponse | undefined;
};
