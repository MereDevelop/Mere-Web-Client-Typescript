import {
  FailureResponse,
  SuccessResponse,
} from '@custom/types/common/Response';
import { UserType } from '@custom/types/login/Login';

export function isFailureResponse<T>(
  response: SuccessResponse<T> | FailureResponse,
): response is FailureResponse {
  return !response.isSuccess;
}

export function isUserType(userType: string): userType is UserType {
  return userType === 'owner' || userType === 'admin';
}
