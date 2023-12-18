import ReactDOM from 'react-dom';

import '@styles/commons/modal/Modal.scss';

type ChildrenProps = string | JSX.Element | JSX.Element[];

const Backdrop: React.FC<{ onClose?: () => void }> = ({ onClose }) => (
  <div className='modal-overlay' onClick={onClose} />
);

const ModalOverlay: React.FC<{
  className: string;
  children: ChildrenProps;
}> = ({ className, children }) => (
  <div className={`modal ${className}`}>{children}</div>
);

const portalElement: HTMLElement = document.getElementById(
  'overlays',
) as HTMLElement;

const Modal: React.FC<{
  className: string;
  children: ChildrenProps;
  onClose?: () => void;
}> = ({ className, children, onClose }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay className={className}>{children}</ModalOverlay>,
      portalElement,
    )}
  </>
);

export default Modal;
