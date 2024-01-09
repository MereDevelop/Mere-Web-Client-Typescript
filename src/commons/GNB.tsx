import { NavLink } from 'react-router-dom';

import warningRedIcon from '@assets/warning_red_icon.png';
import warningBlueIcon from '@assets/warning_blue_icon.png';
import GNBItems from '@constants/gnb';
import useErrorMessage from '@hooks/useErrorMessage';
import useModal from '@hooks/useModal';
import {
  requestOpenOperationStatus,
  requestCloseOperationStatus,
} from '@services/owner/store';
import {
  getOperationStatus,
  setOperationStatus,
} from '@store/operation-status-store';

import '@styles/commons/GNB.scss';

import ConfirmModal from './modal/ConfirmModal';
import TextPromptModal from './modal/TextPromptModal';

const GNB = () => {
  const isOpen = getOperationStatus();
  const [errorMessage, setErrorMessage] = useErrorMessage();
  const { isConfirm, isTextPrompt, onClickYes, openConfirm, closeConfirm } =
    useModal();

  const openOperationStatus = async () => {
    const response = await requestOpenOperationStatus();
    if (response.status !== 200) {
      setErrorMessage(response.message);
      return;
    }

    setOperationStatus(true);
  };

  const closeOperationStatus = async () => {
    const response = await requestCloseOperationStatus();
    if (response.status !== 200) {
      setErrorMessage(response.message);
      return;
    }

    setOperationStatus(false);
  };

  const onClickChangeOperationStatus = async () => {
    closeConfirm();
    onClickYes();

    if (isOpen) await closeOperationStatus();
    else await openOperationStatus();
  };

  return (
    <>
      <div className='home-gnb-container'>
        <nav className='home-gnb'>
          <div className='home-gnb-logo-container'>
            <div className='gnb-logo' />
          </div>
          <ul className='gnb-list'>
            {GNBItems.map((item) => (
              <li className='gnb-item' key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? 'gnb-item-link gnb-item-link__active'
                      : 'gnb-item-link'
                  }
                  end={item.link === '/home'}
                >
                  <div className='gnb-icon-container'>
                    {item.icon}
                    <div className='gnb-overlay' />
                  </div>
                  <p className='gnb-text'>{item.text}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`current-store-state ${
            isOpen ? 'current-store-state_on' : 'current-store-state_off'
          }`}
        >
          <button
            type='button'
            className='store-transform-btn'
            onClick={openConfirm}
          >
            {isOpen ? '영업중' : '영업종료'}
          </button>
        </div>
      </div>
      {isConfirm && (
        <ConfirmModal
          icon={isOpen ? warningRedIcon : warningBlueIcon}
          textMsg={
            isOpen ? '영업을 종료하시겠습니까?' : '영업을 시작하시겠습니까?'
          }
          mainMsg={isOpen ? '종료' : '시작'}
          mainColor={isOpen ? '#FF5A69' : '#4162FF'}
          noBtnMsg='취소'
          yesBtnMsg={isOpen ? '영업 종료' : '영업 시작'}
          onCloseConfirm={closeConfirm}
          onClickYes={onClickChangeOperationStatus}
        />
      )}
      {!errorMessage && isTextPrompt && (
        <TextPromptModal
          textMsg={
            !isOpen ? '영업이 시작되었습니다.' : '영업이 종료되었습니다.'
          }
          type='basic'
        />
      )}
      {errorMessage && <TextPromptModal textMsg={errorMessage} type='basic' />}
    </>
  );
};

export default GNB;
