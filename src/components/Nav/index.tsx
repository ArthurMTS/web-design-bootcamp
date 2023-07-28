"use client";
import Link from "next/link";

import "./styles.css";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const togglePopUp = () => {
    setOpen(!open);
  };

  return (
    <div className={`nav ${open ? "open" : ""}`} onClick={togglePopUp}>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">SignUp</Link></li>
        <li><Link href="/sidebar">Sidebar</Link></li>
        <li><Link href="/navbar">Navbar</Link></li>
        <li><Link href="/footer">Footer</Link></li>
        <li><Link href="/popup">PopUp</Link></li>
        <li><Link href="/creditCard">Credit Card</Link></li>
        <li><Link href="/timeline">Timeline</Link></li>
        <li><Link href="/widget">Widget</Link></li>
        <li><Link href="/taskTracker">Task Tracker</Link></li>
      </ul>
      <i className="bx bx-menu"></i>
    </div>
  );
}
