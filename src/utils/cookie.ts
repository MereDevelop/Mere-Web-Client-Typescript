import Cookies from 'js-cookie';

import { EMPTY_DATA } from '@constants/global';

export function getDataInCookie(name: string): string {
  return Cookies.get(name) || EMPTY_DATA;
}

export function setDataInCookie(name: string, data: string, expires = 7) {
  Cookies.set(name, data, { expires });
}

export function removeDataInCookie(name: string) {
  if (Cookies.get(name)) Cookies.remove(name);
}
