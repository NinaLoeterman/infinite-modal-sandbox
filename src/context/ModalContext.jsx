import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "../components/Modal";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [modalStack, setModalStack] = useState([]);

  const modalContext = () => {
    const id = uuidv4();
    setModalStack([...modalStack, id]);
  };

  const closeModal = () => {
    const modifiedStack = modalStack.slice(0, -1);
    setModalStack(modifiedStack);
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {modalStack.map((modalId) => (
        <Modal key={modalId} closeModal={closeModal} />
      ))}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
