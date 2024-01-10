import { SuccessResponse, FailureResponse } from '@services/crud';

export function isFailureResponse<T>(
  response: SuccessResponse<T> | FailureResponse,
): response is FailureResponse {
  return !response.isSuccess;
}
