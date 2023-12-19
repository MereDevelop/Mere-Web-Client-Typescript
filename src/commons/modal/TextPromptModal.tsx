import Modal from './Modal';

import '@styles/commons/modal/TextPromptModal.scss';

type TextPromptModalProps = {
  textMsg: string;
  type: 'basic' | 'reverse';
};

const PROMPT_TYPE = Object.freeze({
  basic: 'basic-prompt-container',
  reverse: 'reverse-prompt-container',
});

const TextPromptModal: React.FC<TextPromptModalProps> = ({
  textMsg,
  type = 'basic',
}) => {
  return (
    <Modal className={`prompt-container ${PROMPT_TYPE[type]}`}>
      <p className='confirm-text'>{textMsg}</p>
    </Modal>
  );
};

export default TextPromptModal;
