import { ApiResponse } from '../response';

interface LoginPlaceHolders {
  id: string;
  save: string;
}

export interface FormPlaceHolders {
  [key: string]: LoginPlaceHolders;
  admin: LoginPlaceHolders;
  owner: LoginPlaceHolders;
}

export interface LoginFormData {
  [key: string]: FormDataEntryValue | null;
  id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface TokenResponse {
  accessTokenDto: {
    accessToken: string;
    accessTokenExpiredTime: string;
  };
  refreshTokenDto: {
    refreshToken: string;
    refreshTokenExpiredTime: string;
  };
}

export interface LoginResponse extends ApiResponse {
  data: TokenResponse;
  status: number;
}
