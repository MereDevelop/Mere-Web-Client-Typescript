import React from 'react';

import adminLogoImage from '@assets/admin_logo.png';
import logoImage from '@assets/logo.png';
import { LOGIN_MODE } from '@constants/auth/login';
import '@styles/auth/login/LoginLayout.scss';

import ModeToggle from './ModeToggle';

const LoginHeader: React.FC<{ mode: string }> = ({ mode }) => {
  return (
    <>
      <div className='login-logo-container'>
        {mode === LOGIN_MODE.owner ? (
          <img className='logo-image' src={logoImage} alt='Owner Logo' />
        ) : (
          <img className='logo-image' src={adminLogoImage} alt='Admin Logo' />
        )}
      </div>

      <ModeToggle mode={mode} />
    </>
  );
};

export default React.memo(LoginHeader);
