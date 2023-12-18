import Cookies from 'js-cookie';

import { EMPTY_DATA } from '@constants/global';

export function getDataInCookie(name: string): string {
  return Cookies.get(name) || EMPTY_DATA;
}

export function setDataInCookie(name: string, data: string, expires = 3) {
  Cookies.set(name, data, {
    secure: true, // Set to true if using HTTPS
    sameSite: 'strict', // CSRF
    expires, // Expiration Time 저장 (default = 3)
  });
}

export function removeDataInCookie(name: string) {
  if (Cookies.get(name)) Cookies.remove(name);
}
