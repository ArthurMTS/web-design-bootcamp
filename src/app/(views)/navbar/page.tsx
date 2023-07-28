"use client";
import { useState } from "react";
import "./styles.css";
import { Nav } from "@/components/Nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenuOpen = () => {
    setOpen(!open);
  };

  return (
    <main className={`${open ? "open" : ""}`}>
      <nav className="navbar">
        <div className="navbar-overlay" onClick={toggleMenuOpen}></div>
        <button className="navbar-burger" onClick={toggleMenuOpen}>
          <i className="bx bx-menu"></i>
        </button>

        <h1 className="navbar-title">AsmrProg</h1>
        <nav className="navbar-menu">
          <button className="active">Youtube</button>
          <button className="active">Archive</button>
          <button>Projects</button>
        </nav>
      </nav>

      <Nav />
    </main>
  );
}
