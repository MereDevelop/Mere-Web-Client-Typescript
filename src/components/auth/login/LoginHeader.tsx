import React from 'react';

import adminLogoImage from '@assets/admin_logo.png';
import logoImage from '@assets/logo.png';
import { USER_TYPE } from '@constants/auth/login';
import { UserType } from '@custom/types/login/Login';
import '@styles/auth/login/LoginLayout.scss';

const LoginHeader: React.FC<{ userType: UserType }> = ({ userType }) => {
  return (
    <div className='login-logo-container'>
      {userType === USER_TYPE.owner ? (
        <img className='logo-image' src={logoImage} alt='Owner Logo' />
      ) : (
        <img className='logo-image' src={adminLogoImage} alt='Admin Logo' />
      )}
    </div>
  );
};

export default React.memo(LoginHeader);
