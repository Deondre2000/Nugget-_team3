import React from "react";
import "../blocks/Home.css";
import NuggetHome from "../assets/nugget-Home.jpg";

function Home() {
  return (
    <main>
      <div className="Home">
        <img src={NuggetHome} alt="Nugget Home" className="Home__image" />
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
      </div>
    </main>
  );
}

export default Home;
