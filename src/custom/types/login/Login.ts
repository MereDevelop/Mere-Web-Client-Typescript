import { ApiResponse } from '../response';

export type UserType = 'owner' | 'admin';

interface UserPlaceHolders {
  id: string;
  save: string;
}

export interface FormPlaceHolders {
  admin: UserPlaceHolders;
  owner: UserPlaceHolders;
}

export interface LoginFormData {
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
