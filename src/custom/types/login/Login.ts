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

interface BasicSignForm {
  password: FormDataEntryValue | null;
}

export interface LoginForm extends BasicSignForm {
  id: FormDataEntryValue | null;
}

export interface ChangePasswordForm extends BasicSignForm {
  id: string | undefined;
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
