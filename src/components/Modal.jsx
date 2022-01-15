import React, { useCallback, useContext, useEffect } from "react";
import { ModalContext } from "../context/ModalContext";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  const openModal = useContext(ModalContext);

  const close = (e) => {
    if (e.target.className === "overlay") closeModal();
  };

  const escClose = useCallback(
    (event) => {
      const { keyCode } = event;
      if (keyCode === 27) closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", escClose);
    return () => {
      window.removeEventListener("keydown", escClose);
    };
  }, [escClose]);

  return (
    <div onClick={close} className="overlay">
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
