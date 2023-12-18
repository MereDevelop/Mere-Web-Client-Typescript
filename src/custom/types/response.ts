// 모든 API 응답에 대한 기본 인터페이스
export interface ApiResponse {
  success: boolean;
}

export interface CustomError extends ApiResponse {
  errorCode: string;
  errorMessage: string;
  status: number;
}
