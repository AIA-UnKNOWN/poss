import './Modal.style.scss';
import React from "react";
import type { Modal } from "./Modal.types";

const Modal: React.FC<Modal> = ({ children }) => {

  return (
    <div className="modal">
      <div className="modal-content-container">
        {children}
      </div>
    </div>
  )
}

export default Modal;