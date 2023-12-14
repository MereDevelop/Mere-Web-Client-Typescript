import { useNavigate } from 'react-router-dom';

import warningRedIcon from '@assets/warning_red_icon.png';
// import ConfirmModal from '@commons/modal/ConfirmModal';
// import LoginModePrompt from '@commons/modal/login/LoginModePrompt';
import '@styles/auth/login/ModeToggle.scss';
// import useModal from '@hooks/useModal';

const ModeToggle: React.FC<{ mode: string }> = ({ mode }) => {
  // const { isConfirm, confirmPrompt, onClickYes, openConfirm, closeConfirm } =
  //   useModal();

  const navigate = useNavigate();

  const isAdminView = mode === 'admin';

  const onClickToggle = () => {
    if (isAdminView) {
      navigate('/');
      // return;
    }
    // openConfirm();
  };

  const onChangeMode = () => {
    navigate('?mode=admin');
    // onClickYes();
  };

  return (
    <>
      <div className='toggle-btn'>
        <p className='toggle-text'>관리자</p>
        <label className='switch' htmlFor='modeToggle'>
          <input
            id='modeToggle'
            className='switch-input'
            type='checkbox'
            onClick={onClickToggle}
          />
          <span className='switch-label' data-on='On' data-off='Off' />
          <span className='switch-handle' />
        </label>
      </div>

      {/* {isConfirm && !isAdminView && (
        <ConfirmModal
          icon={warningRedIcon}
          textMsg='관리자모드로 전환 하시겠습니까?'
          mainMsg='전환'
          mainColor='#FF5A69'
          noBtnMsg='아니요'
          yesBtnMsg='예'
          onCloseConfirm={closeConfirm}
          onClickYes={onChangeMode}
        />
      )}
      {confirmPrompt && (
        <LoginModePrompt textMsg='관리자모드로 전환되었습니다' />
      )} */}
    </>
  );
};

export default ModeToggle;
