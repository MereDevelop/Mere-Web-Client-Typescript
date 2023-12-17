import Modal from './Modal';
import '@styles/commons/modal/ConfirmModal.scss';

interface ConfirmModalProps {
  icon: string;
  textMsg: string;
  mainMsg: string;
  mainColor: string;
  noBtnMsg: string;
  yesBtnMsg: string;
  onCloseConfirm: () => void;
  onClickYes: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  icon,
  textMsg,
  mainMsg,
  mainColor,
  noBtnMsg,
  yesBtnMsg,
  onCloseConfirm,
  onClickYes,
}) => {
  const [beforeMsg, afterMsg] = textMsg.split(mainMsg);

  return (
    <Modal className='change-mode-container' onClose={onCloseConfirm}>
      <div className='icon-container'>
        <img className='icon-image' src={icon} alt='icon-logo' />
      </div>
      <div className='change-mode-confirm'>
        <p className='confirm-text'>
          {beforeMsg}
          <span className='main-text' style={{ color: mainColor }}>
            {mainMsg}
          </span>
          {afterMsg}
        </p>
        <div className='change-mode-btns'>
          <button type='button' className='no-btn' onClick={onCloseConfirm}>
            {noBtnMsg}
          </button>
          <button type='button' className='yes-btn' onClick={onClickYes}>
            {yesBtnMsg}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
