import { FormPlaceHolders } from '@custom/types/login/Login';

export const LOGIN_MODE = Object.freeze({
  owner: 'owner',
  admin: 'admin',
});

export const FORM_PLACEHOLDERS: FormPlaceHolders = Object.freeze({
  owner: {
    id: '아이디',
    save: '아이디 저장',
  },
  admin: {
    id: '관리자번호',
    save: '관리자번호 저장',
  },
});

export const COMMON_PLACEHOLDERS = Object.freeze({
  password: '비밀번호',
  login: '로그인',
});
