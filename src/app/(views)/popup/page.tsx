"use client";
import { useState } from "react";

import { Nav } from "@/components/Nav";
import styles from "./styles.module.css";

export default function Popup() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <main className={`${styles.main} ${open ? styles.open : styles.closed}`}>
      <button onClick={toggleModal}>Open Modal</button>

      <div className={styles.modalBackground} onClick={toggleModal}></div>

      <div className={styles.modal}>
        <h2>Modal Window</h2>
        <p>
          You have opened the modal, they are great for displaying critical informations or confirming actions!
        </p>
      </div>

      <Nav />
    </main>
  );
}