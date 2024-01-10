import {
  TokenExpirationErrorCodeType,
  UserTokenErrorCodeType,
} from '@custom/types/error/ErrorCode';

export function isUserTokenErrorCode(
  errorCode: string,
): errorCode is UserTokenErrorCodeType {
  if (errorCode === 'FT0000') return true;
  if (errorCode === 'FT0002') return true;
  if (errorCode === 'FT0005') return true;

  return false;
}

export function isTokenExpirationErrorCode(
  errorCode: string,
): errorCode is TokenExpirationErrorCodeType {
  if (errorCode === 'FT0001') return true;
  if (errorCode === 'FT0003') return true;
  if (errorCode === 'FT0004') return true;

  return false;
}
