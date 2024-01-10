export interface AccessTokenDTO {
  accessToken: string;
  accessTokenExpiredTime: string;
}

interface RefreshTokenDTO {
  refreshToken: string;
  refreshTokenExpiredTime: string;
}

export interface TokenResponse {
  accessTokenDto: AccessTokenDTO;
  refreshTokenDto: RefreshTokenDTO;
}
