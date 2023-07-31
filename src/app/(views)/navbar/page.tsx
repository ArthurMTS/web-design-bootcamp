"use client";
import { useState } from "react";

import { Nav } from "@/components/Nav";
import styles from "./styles.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenuOpen = () => {
    setOpen(!open);
  };

  return (
    <main className={`${styles.main} ${open ? styles.open : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.navbarOverlay} onClick={toggleMenuOpen}></div>
        <button className={styles.navbarBurger} onClick={toggleMenuOpen}>
          <i className="bx bx-menu"></i>
        </button>

        <h1 className={styles.navbarTitle}>AsmrProg</h1>
        <nav className={styles.navbarMenu}>
          <button className={styles.active}>Youtube</button>
          <button className={styles.active}>Archive</button>
          <button>Projects</button>
        </nav>
      </nav>

      <Nav />
    </main>
  );
}
