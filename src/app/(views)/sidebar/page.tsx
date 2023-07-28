"use client";
import { useState } from "react";

import "./styles.css";
import { Nav } from "@/components/Nav";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open);
  };

  return (
    <main className={`${open ? "open": ""}`}>
      <nav className="sidebar">
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button className="sidebar-burger" onClick={toggleSideBar}>
              <i className="bx bx-menu"></i>
            </button>
            <img src="logo.png" alt="" className="sidebar-logo" />
          </header>

          <nav className="sidebar-menu">
            <button>
              <i className="bx bx-home"></i>
              <span>Home</span>
            </button>
            <button>
              <i className='bx bx-user'></i>
              <span>Account</span>
            </button>
            <button className="has-border">
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
            <button className="has-border">
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
