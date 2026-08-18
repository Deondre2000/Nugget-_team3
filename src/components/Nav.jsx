import "../blocks/Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <img src={logo} alt="Nugget" />
        </div>
        <button className="nav_menu_button" onClick={() => setMenuOpen(true)}>
          ☰
        </button>

        <aside>
          <div className="nav_login">
            <button className="nav_button nav_add_restaurant">
              Add a Restaurant
            </button>
            <Link to="/signin" className="nav_button nav_sign_in">
              Sign In
            </Link>
            <Link to="/signup" className="nav_button nav_sign_up">
              Sign Up
            </Link>
          </div>
        </aside>
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
