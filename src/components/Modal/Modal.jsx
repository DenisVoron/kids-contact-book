import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTyps from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

import { ModalBackdrop, ModalContent, BtnClose } from './Modal.styled';

const refModal = document.querySelector('#modal-root');

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [toggleModal]);

  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const onBtnClose = () => {
    toggleModal();
  };

  return createPortal(
    <ModalBackdrop onClick={onClickBackdrop}>
      <ModalContent>
        <BtnClose onClick={onBtnClose}>
          <CloseIcon color="primary" />
        </BtnClose>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    refModal
  );
};

Modal.propTyps = {
  children: PropTyps.node,
  toggleModal: PropTyps.func.isRequired,
};
