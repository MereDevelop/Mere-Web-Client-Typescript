import { ApiResponse, CustomError } from '@custom/types/response';

export function isCustomError(
  response: ApiResponse | CustomError,
): response is CustomError {
  return !response.success;
}
