import "../blocks/Nav.css";
import React, { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <button className="nav_menu_button" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
        <div className="nav_login">
          <button className="nav_button nav_sign_in">Sign In</button>
          <button className="nav_button nav_sign_up">Sign Up</button>
        </div>
      </nav>

      <div
        className={menuOpen ? "nav__overlay is-open" : "nav__overlay"}
        onClick={() => setMenuOpen(false)}
      >
        <aside
          className={menuOpen ? "nav__sidebar is-open" : "nav__sidebar"}
          id="mobile-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="nav__close" onClick={() => setMenuOpen(false)}>
            X
          </button>
          <a href="#" className="nav__link">
            Home
          </a>
          <a href="#" className="nav__link">
            Add a Restaurant
          </a>
          <a href="#" className="nav__link">
            Restaurant Partner
          </a>
          <a href="#" className="nav__link">
            Local Heroes
          </a>
          <a href="#" className="nav__link">
            FAQs
          </a>
        </aside>
      </div>
    </>
  );
}

export default Nav;
