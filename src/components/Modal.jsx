import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  const openModal = useContext(ModalContext);

  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <div>IM A MODAL!</div>
          <button onClick={closeModal}>Close Me</button>
          <button onClick={openModal}>OPEN ANOTHER MODAL</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
