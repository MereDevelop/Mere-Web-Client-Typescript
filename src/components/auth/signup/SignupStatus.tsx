import { Link } from 'react-router-dom';
import logoImage from '@assets/logo.png';
import '@styles/auth/signup/SignupStatus.scss';

const SignupStatus: React.FC<{ currentStatus: string }> = ({
  currentStatus,
}) => {
  const isStoreInfo =
    currentStatus === 'signup' ? 'proceed-state_selected' : '';
  const isOwnerInfo =
    currentStatus === 'ownerinfo' || currentStatus === 'checkinfo'
      ? 'proceed-state_selected'
      : '';
  const isWait = currentStatus === 'wait' ? 'proceed-state_selected' : '';
  const isDone = currentStatus === 'done' ? 'proceed-state_selected' : '';

  return (
    <>
      <Link to='/' className='home-navigation-logo'>
        <img className='logo-image' src={logoImage} alt='logo' />
      </Link>
      <h1 className='signup-title'>회원 가입</h1>
      <div className='proceed-container'>
        <p className={`proceed-state ${isStoreInfo}`}>매장정보입력</p>
        <p className='proceed-state-divider'>{'>'}</p>
        <p className={`proceed-state ${isOwnerInfo}`}>사장님정보입력</p>
        <p className='proceed-state-divider'>{'>'}</p>
        <p className={`proceed-state ${isWait}`}>승인대기</p>
        <p className='proceed-state-divider'>{'>'}</p>
        <p className={`proceed-state ${isDone}`}>가입완료</p>
      </div>
    </>
  );
};

export default SignupStatus;
