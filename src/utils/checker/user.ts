import { UserType } from '@custom/types/login/Login';

export function isUserType(userType: string): userType is UserType {
  return userType === 'owner' || userType === 'admin';
}
