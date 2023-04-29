import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  styles = {
    position: 'absolute',
    right: '20px',
    top: '60px',
    cursor: 'pointer',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }

  handelButtonClick = () => {
    this.props.onClose();
  };
  handelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, children } = this.props;
    return createPortal(
      <Overlay onClick={this.handelBackdropClick} largeImage={largeImage}>
        <ModalBtn type="button" onClick={this.handelButtonClick}>
          X
        </ModalBtn>
        <ModalContainer>{children}</ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
