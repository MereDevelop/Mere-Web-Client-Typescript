/**
 * API 요청 성공 타입
 * isSuccess: true
 * data: T
 */
export interface SuccessResponse<T> {
  isSuccess: boolean;
  data: T;
}

/**
 * API 요청 실패 타입
 * isSuccess: false
 * errorCode: 커스텀 에러 코드
 * errorMessage: 커스텀 에러 메시지
 * status: 상태 코드
 */
export interface FailureResponse {
  isSuccess: boolean;
  errorCode: string;
  errorMessage: string;
}
