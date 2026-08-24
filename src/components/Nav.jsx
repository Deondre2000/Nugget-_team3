import "../blocks/Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import loginCover from "../assets/login-cover.png";
import Mhome from "../assets/Mhome.png";
import Madd from "../assets/Madd.png";
import Mpartner from "../assets/Mpartner.png";
import Mlocal from "../assets/Mlocal.png";
import MFQAs from "../assets/MFQAs.png";
import Mbookmark from "../assets/Mbookmark.png";
import Mperson from "../assets/Mperson.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerItemClick = (path) => {
    setMenuOpen(false);

    if (path) {
      navigate(path);
    }
  };

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
          <div className="nav__drawer-header">
            <img src={loginCover} alt="Nugget" className="nav__drawer-logo" />
            <button className="nav__close" onClick={() => setMenuOpen(false)}>
              ×
            </button>
          </div>

          <nav className="nav__drawer-nav">
            <button
              className="nav__drawer-nav-button"
              type="button"
              onClick={() => handleDrawerItemClick("/")}
            >
              <img src={Mhome} alt="" />
              Home
            </button>
            <button
              className="nav__drawer-nav-button"
              type="button"
              onClick={() => handleDrawerItemClick("/restaurantsPage")}
            >
              <img src={Madd} alt="" />
              Add a Restaurant
            </button>
            <button
              className="nav__drawer-nav-button"
              type="button"
              onClick={() => handleDrawerItemClick(null)}
            >
              <img src={Mpartner} alt="" />
              Restaurant Partner
            </button>
            <button
              className="nav__drawer-nav-button"
              type="button"
              onClick={() => handleDrawerItemClick(null)}
            >
              <img src={Mlocal} alt="" />
              Local Heroes
            </button>
            <button
              className="nav__drawer-nav-button"
              type="button"
              onClick={() => handleDrawerItemClick(null)}
            >
              <img src={MFQAs} alt="" />
              FAQs
            </button>
            <button
              className="nav__drawer-nav-button"
              type="button"
              onClick={() => handleDrawerItemClick(null)}
            >
              <img src={Mbookmark} alt="" />
              Saved Places
            </button>
            <button
              className="nav__drawer-nav-button"
              type="button"
              onClick={() => handleDrawerItemClick("/create-profile")}
            >
              <img src={Mperson} alt="" />
              Become a Local Hero
            </button>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default Nav;
