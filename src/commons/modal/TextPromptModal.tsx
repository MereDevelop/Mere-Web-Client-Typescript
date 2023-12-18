import Modal from './Modal';

import '@styles/commons/modal/TextPromptModal.scss';

type PromptType = 'basic' | 'reverse';
const PROMPT_TYPE = Object.freeze({
  basic: 'basic-prompt-container',
  reverse: 'reverse-prompt-container',
});

const TextPromptModal: React.FC<{ textMsg: string; type: PromptType }> = ({
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
