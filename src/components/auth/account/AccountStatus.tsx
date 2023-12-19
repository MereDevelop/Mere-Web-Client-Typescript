import { Link } from 'react-router-dom';

import logoImage from '@assets/logo.png';
import '@styles/auth/account/AccountStatus.scss';

const AccountStatus: React.FC<{ currentStatus: string }> = ({
  currentStatus,
}) => {
  const isVerify = currentStatus === 'account' ? 'proceed-state_selected' : '';
  const isReset = currentStatus === 'reset' ? 'proceed-state_selected' : '';

  return (
    <>
      <Link to='/' className='home-navigation-logo'>
        <img className='logo-image' src={logoImage} alt='logo' />
      </Link>
      <h1 className='verification-title'>비밀번호 변경</h1>
      <div className='proceed-container'>
        <p className={`proceed-state ${isVerify}`}>아이디 입력 및 본인확인</p>
        <p className='proceed-state-divider'>{'>'}</p>
        <p className={`proceed-state ${isReset}`}>비밀번호 변경</p>
      </div>
    </>
  );
};

export default AccountStatus;
