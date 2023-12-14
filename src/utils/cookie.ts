import Cookies from 'js-cookie';

import { EMPTY_DATA } from '@constants/global';

export function getDataInCookie(name: string): string {
  return Cookies.get(name) || EMPTY_DATA;
}
