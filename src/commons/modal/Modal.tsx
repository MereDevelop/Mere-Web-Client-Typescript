import ReactDOM from 'react-dom';

import '@styles/commons/modal/Modal.scss';

const portalElement: HTMLElement = document.getElementById(
  'overlays',
) as HTMLElement;

type ModalOverlayProps = {
  className: string;
  children: string | JSX.Element | JSX.Element[];
};

type CloseFunction = {
  onClose?: () => void;
};

const Modal: React.FC<ModalOverlayProps & CloseFunction> = ({
  className,
  children,
  onClose,
}) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay className={className}>{children}</ModalOverlay>,
      portalElement,
    )}
  </>
);

const ModalOverlay: React.FC<ModalOverlayProps> = ({ className, children }) => (
  <div className={`modal ${className}`}>{children}</div>
);

const Backdrop: React.FC<CloseFunction> = ({ onClose }) => (
  <div className='modal-overlay' onClick={onClose} />
);

export default Modal;
