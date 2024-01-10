import {
  FailureResponse,
  SuccessResponse,
} from '@custom/types/common/Response';

export function isSuccessResponse<T>(
  response: SuccessResponse<T> | FailureResponse,
): response is SuccessResponse<T> {
  return response.isSuccess;
}

export function isFailureResponse<T>(
  response: SuccessResponse<T> | FailureResponse,
): response is FailureResponse {
  return !response.isSuccess;
}
