import { UserType } from '@custom/types/login/Login';
import { SuccessResponse, FailureResponse } from '@services/crud';

export function isFailureResponse<T>(
  response: SuccessResponse<T> | FailureResponse,
): response is FailureResponse {
  return !response.isSuccess;
}

export function isUserType(userType: string): userType is UserType {
  return userType === 'owner' || userType === 'admin';
}
