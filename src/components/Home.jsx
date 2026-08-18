import "../blocks/Home.css";
import DTHome from "../assets/DT-home.png";
import NuggetHome from "../assets/Nugget-home.png";
import London from "../assets/london.jpg";
import Sanfransico from "../assets/sanfransico.jpg";
import chicago from "../assets/chicago.jpg";

function Home() {
  return (
    <main>
      <section className="Home">
        <img src={DTHome} alt="Nugget Home" className="Home__image-DT" />
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
      </section>
      <section className="Home__citys">
        <div className="Home__citys-container">
          <h2 className="Home__city-title"> Browse by city</h2>
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

export default Home;
