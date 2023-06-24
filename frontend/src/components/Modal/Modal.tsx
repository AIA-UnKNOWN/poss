import './Modal.style.scss';
import React, { useEffect } from "react";
import ReactModal from 'react-modal';
// Types
import type { Modal } from "./Modal.types";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    borderRadius: '10px',
  },
  overlay: {
    background: 'rgba(105, 105, 105, 0.3)',
  },
};

const Modal: React.FC<Modal> = ({ isOpen, onCloseModal, children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    toggleModalOnLoad();
  }, [isOpen]);

  const toggleModalOnLoad = () => {
    typeof isOpen === 'boolean' && setIsModalOpen(isOpen);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  const closeModal = () => {
    setIsModalOpen(false);
    // Use this one if you want to sync the modal state and your component state.
    // Possible issue found if not synced => You'll have to double click sometimes to toggle the modal
    typeof onCloseModal === 'function' && onCloseModal();
  }

  return (
    <ReactModal
      isOpen={isModalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;