import React, { useContext } from "react";
import "./App.css";
import { ModalContext } from "./context/ModalContext.jsx";

function App() {
  const openModal = useContext(ModalContext);

  return (
    <div className="App">
      <div>
        <div>This is an app</div>
        <button onClick={openModal}>Click ME</button>
      </div>
    </div>
  );
}

export default App;
