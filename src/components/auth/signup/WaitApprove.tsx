import CompleteImage from '@assets/complete_icon.png';
import { Link } from 'react-router-dom';
import '@styles/auth/signup/WaitApprove.scss';

const WaitApprove = () => {
  return (
    <div className='complete-signup-container'>
      <div className='complete-icon-container'>
        <img
          className='complete-signup-icon'
          src={CompleteImage}
          alt='Complete signup'
        />
      </div>
      <h1 className='complete-signup-coment'>가입 신청이 완료되었습니다!</h1>
      <div className='complete-expanate-container'>
        <p className='complete-explanate'>
          관리자 승인 후,아이디는 개별 문자로 안내되며 관리자 승인은 최대n일까지
          소요 될 수 있습니다.
        </p>
      </div>
      <div className='signup-navigation-container-04'>
        <Link to='/'>
          <button type='button' className='next-navigation-btn-04'>
            처음으로
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WaitApprove;
