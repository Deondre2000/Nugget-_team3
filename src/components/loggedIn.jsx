import "../blocks/loggedIn.css";
import DTHome from "../assets/DT-Home.png";
import NuggetHome from "../assets/Nugget-home.png";
import London from "../assets/london.jpg";
import Sanfransico from "../assets/sanfransico.jpg";
import chicago from "../assets/chicago.jpg";
import logo from "../assets/logo.png";
import PF from "../assets/loggedin-PF.png";
import PP from "../assets/loggedPP.png";
import exit from "../assets/loggedEX.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoggedIn() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <main>
      <section className="Home">
        <img src={DTHome} alt="Nugget Home" className="Home__image-DT" />
        <img src={NuggetHome} alt="Nugget Home" className="Home__image" />
        <div className="Home__header">
          <img src={logo} alt="Nugget Logo" className="loggedIn__logo" />
          {isProfileOpen && (
            <button
              type="button"
              className="loggedIn__menu-background"
              onClick={() => setIsProfileOpen(false)}
            />
          )}
          <button
            type="button"
            className="loggedIn__header-button"
            onClick={() => setIsProfileOpen((isOpen) => !isOpen)}
          >
            <img src={PF} alt="Profile" />
          </button>
          {isProfileOpen && (
            <div className="loggedIn__profile-menu">
              <div className="loggedIn__profile-summary">
                <strong>Username</strong>
                <span>username@gmail.com</span>
                <b>Customer</b>
              </div>
              <button
                type="button"
                className="loggedIn__profile-menu-item"
                onClick={() => navigate("/loggedin")}
              >
                <img src={PP} alt="Profile" />
                View Profile
              </button>
              <button
                type="button"
                className="loggedIn__profile-menu-item"
                onClick={() => navigate("/")}
              >
                <span aria-hidden="true">
                  <img src={exit} alt="Exit" />
                </span>
                Sign Out
              </button>
            </div>
          )}
        </div>
        <div className="Home__search-container">
          <h1 className="Home__title">
            Find kid-friendly restaurants without the guesswork
          </h1>
          <div className="Home__search-input-wrap">
            <span className="Home__search-icon" aria-hidden="true">
              🔍
            </span>
            <input
              className="Home__search-input"
              type="text"
              placeholder="Search for Restaurants"
            />
          </div>
          <button className="Home__search-button">Search Restaurants</button>
        </div>
      </section>

      <section className="Home__citys">
        <h2 className="Home__city-title">Browse by city</h2>
        <p className="Home__city-subtitle">
          We're growing city by city to create more welcoming places for
          families
        </p>
        <div className="Home__citys-container">
          <div className="Home__city-card">
            <img src={London} alt="London" className="Home__card-image" />
            <button type="button" className="Home__card-badge">
              333 restaurants
            </button>
            <div className="Home__card-content">
              <h3 className="Home__card-title">London</h3>
              <p className="Home__card-subtitle">
                Explore family-friendly restaurants across London
              </p>
              <button type="button" className="Home__card-button">
                Explore Restaurants
              </button>
            </div>
          </div>

          <div className="Home__city-card">
            <img src={chicago} alt="Chicago" className="Home__card-image" />
            <button type="button" className="Home__card-badge">
              56 restaurants
            </button>
            <div className="Home__card-content">
              <h3 className="Home__card-title">Chicago</h3>
              <p className="Home__card-subtitle">
                Explore family-friendly restaurants across Chicago
              </p>
              <button type="button" className="Home__card-button">
                Explore Restaurants
              </button>
            </div>
          </div>

          <div className="Home__city-card">
            <img
              src={Sanfransico}
              alt="San Francisco"
              className="Home__card-image"
            />
            <button type="button" className="Home__card-badge">
              27 restaurants
            </button>
            <div className="Home__card-content">
              <h3 className="Home__card-title">San Francisco</h3>
              <p className="Home__card-subtitle">
                Explore family-friendly restaurants across San Francisco
              </p>
              <button type="button" className="Home__card-button">
                Explore Restaurants
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoggedIn;
