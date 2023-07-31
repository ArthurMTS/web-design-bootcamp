"use client";
import { useState } from "react";

import styles from "./styles.module.css";
import { Nav } from "@/components/Nav";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open);
  };

  return (
    <main className={`${styles.main} ${open ? styles.open : ""}`}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <header className={styles.sidebarHeader}>
            <button className={styles.sidebarBurger} onClick={toggleSideBar}>
              <i className="bx bx-menu"></i>
            </button>
            <img src="logo.png" alt="" className={styles.sidebarLogo} />
          </header>

          <nav className={styles.sidebarMenu}>
            <button>
              <i className="bx bx-home"></i>
              <span>Home</span>
            </button>
            <button>
              <i className='bx bx-user'></i>
              <span>Account</span>
            </button>
            <button className={styles.hasBorder}>
              <i className="bx bx-cog"></i>
              <span>Settings</span>
            </button>
            <button>
              <i className="bx bx-shape-circle"></i>
              <span>Blockchain</span>
            </button>
            <button>
              <i className="bx bx-data"></i>
              <span>Databases</span>
            </button>
            <button>
              <i className="bx bx-speaker"></i>
              <span>AudioVibe</span>
            </button>
            <button className={styles.hasBorder}>
              <i className="bx bx-music"></i>
              <span>Soundblast</span>
            </button>
            <button>
              <i className="bx bx-folder"></i>
              <span>Folders</span>
            </button>
            <button>
              <i className="bx bx-layer"></i>
              <span>Levels</span>
            </button>
            <button>
              <i className="bx bx-lock"></i>
              <span>Security</span>
            </button>
          </nav>
        </div>
      </nav>

      <Nav />
    </main>
  );
}
