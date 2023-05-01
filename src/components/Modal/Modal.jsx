import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalContainer, ModalBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImage, children, onClose }) => {
  useEffect(() => {
    const handelKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handelKeyDown);
    return () => document.removeEventListener('keydown', handelKeyDown);
  });

  const handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handelButtonClick = () => {
    onClose();
  };

  return createPortal(
    <Overlay onClick={handelBackdropClick} largeImage={largeImage}>
      <ModalBtn type="button" onClick={handelButtonClick}>
        X
      </ModalBtn>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
};
export default Modal;
