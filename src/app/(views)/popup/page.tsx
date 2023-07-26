"use client";
import { useState } from "react";

import "./styles.css";

export default function Popup() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <main className={open ? "open" : "closed"}>
      <button onClick={toggleModal}>Open Modal</button>

      <div className="modal-background" onClick={toggleModal}></div>

      <div className="modal">
        <h2>Modal Window</h2>
        <p>
          You have opened the modal, they are great for displaying critical informations or confirming actions!
        </p>
      </div>
    </main>
  );
}