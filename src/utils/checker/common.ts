import {
  FailureResponse,
  SuccessResponse,
} from '@custom/types/common/Response';

export function isFailureResponse<T>(
  response: SuccessResponse<T> | FailureResponse,
): response is FailureResponse {
  return !response.isSuccess;
}
