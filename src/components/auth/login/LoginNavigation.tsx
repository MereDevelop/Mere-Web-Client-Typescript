import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/auth/login/LoginNavigation.scss';

const LoginNavigation = () => {
  return (
    <div className='login-navigation-container'>
      <Link to='signup' className='signup-navigation'>
        회원가입
      </Link>
      <Link to='account' className='account-navigation'>
        비밀번호 변경
      </Link>
    </div>
  );
};

export default React.memo(LoginNavigation);
