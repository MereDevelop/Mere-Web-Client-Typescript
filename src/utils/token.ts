import Cookies from 'js-cookie';

const setRefreshToken = (refreshToken: string, expiredTime: string) => {
  Cookies.set('refreshToken', refreshToken, {
    expires: new Date(expiredTime),
  });
};

const getRefreshToken = () => {
  return Cookies.get('refreshToken');
};

export { getRefreshToken, setRefreshToken };
