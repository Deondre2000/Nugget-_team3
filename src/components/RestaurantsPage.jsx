import "../blocks/RestaurantsPage.css";
import London from "../assets/london.jpg";
import Rhome from "../assets/Rhome.png";
import Rhealthy from "../assets/Rhealthy.png";
import Rvegan from "../assets/Rvegan.png";
import Rbaby from "../assets/RbabyCHG.png";
import Rbookmark from "../assets/Rbookmark.png";
import Rclock from "../assets/Rclock.png";
import Rcolor from "../assets/Rcolor.png";
import Redit from "../assets/Redit.png";
import RGluten from "../assets/RGluten.png";
import Rmap from "../assets/Rmap.png";
import Rphone from "../assets/Rphone.png";
import Rsearch from "../assets/Rsearch.png";
import Rvegatarian from "../assets/Rvegatar.png";
import Rlocation from "../assets/Rlocation.png";
import Rheart from "../assets/Rheart.png";
import Rphoto from "../assets/Rphoto.png";
import createBack from "../assets/createBack.png";
import { useNavigate } from "react-router-dom";

function RestaurantsPage() {
  const navigate = useNavigate();

  return (
    <main className="RestaurantsPage">
      <aside className="RestaurantsPage__sidebar">
        <button className="RestaurantsPage__menu" type="button">
          ☰
        </button>
        <button
          className="RestaurantsPage__sidebar-button"
          type="button"
          onClick={() => navigate("/loggedin")}
        >
          <img src={Rhome} alt="Home" />
        </button>
        <img src={Rsearch} alt="Search" />
        <img src={Rbookmark} alt="Saved restaurants" />
        <button className="RestaurantsPage__add" type="button">
          +
        </button>
        <span className="RestaurantsPage__profile">LP</span>
      </aside>

      <section className="RestaurantsPage__details">
        <div className="RestaurantsPage__topbar">
          <button type="button">
            <img src={createBack} alt="Back" />
          </button>
        </div>
        <img
          className="RestaurantsPage__restaurant-image"
          src={Rphoto}
          alt="Gouqi restaurant"
        />
        <div className="RestaurantsPage__content">
          <h1>Gouqi</h1>
          <p className="RestaurantsPage__likes">
            <img
              className="RestaurantsPage__likes-icon"
              src={Rheart}
              alt="Likes"
            />{" "}
            20 likes · $$ · Bar &amp; Grill
          </p>
          <div className="RestaurantsPage__actions">
            <button className="RestaurantsPage__reserve" type="button">
              Make a Reservation
            </button>
            <button className="RestaurantsPage__share" type="button">
              <img
                className="RestaurantsPage__share-icon"
                src={Redit}
                alt="Share"
              />
            </button>
          </div>
          <h2>About</h2>
          <p className="RestaurantsPage__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            hendrerit enim, vitae ornare nisi.
          </p>
          <div className="RestaurantsPage__info">
            <button className="RestaurantsPage__info-button" type="button">
              <img src={Rlocation} alt="" /> Address
            </button>
            <span>41 High st, address name</span>
            <button className="RestaurantsPage__info-button" type="button">
              <img src={Rphone} alt="" /> Phone
            </button>
            <span>+1 234 567 8900</span>
            <button className="RestaurantsPage__info-button" type="button">
              <img src={Rclock} alt="" /> Hours
            </button>
            <b>
              Mon: <small>8:30 am - 6:00 pm</small>
            </b>
            <b>
              Tue: <small>8:30 am - 6:00 pm</small>
            </b>
            <b>
              Wed: <small>8:30 am - 6:00 pm</small>
            </b>
            <b>
              Thu: <small>8:30 am - 6:00 pm</small>
            </b>
            <b>
              Fri: <small>8:30 am - 6:00 pm</small>
            </b>
            <b>
              Sat: <small>8:30 am - 6:00 pm</small>
            </b>
            <b>
              Sun: <em>Closed</em>
            </b>
          </div>
          <h2 className="RestaurantsPage__reviews">Reviews</h2>
          <button className="RestaurantsPage__review-button" type="button">
            Leave a Review
          </button>
        </div>
      </section>

      <section className="RestaurantsPage__features">
        <h2>Family Features</h2>
        <RestaurantsPageFeature image={Rhealthy} title="Kids Menu" />
        <RestaurantsPageFeature image={Rhealthy} title="High Chairs" />
        <RestaurantsPageFeature image={Rcolor} title="Coloring Activities" />
        <RestaurantsPageFeature image={Rbaby} title="Baby Change (Unisex)" />
        <h2 className="RestaurantsPage__dietary-title">Dietary Options</h2>
        <RestaurantsPageFeature
          image={Rvegatarian}
          title="Vegetarian Options"
        />
        <RestaurantsPageFeature image={Rvegan} title="Vegan Options" />
        <RestaurantsPageFeature image={RGluten} title="Gluten-Free Options" />
        <RestaurantsPageFeature image={Rhealthy} title="Healthy Options" />
      </section>

      <img
        className="RestaurantsPage__map"
        src={Rmap}
        alt="Map of nearby restaurants"
      />
    </main>
  );
}

function RestaurantsPageFeature({ image, title }) {
  return (
    <div className="RestaurantsPage__feature">
      <img src={image} alt="" />
      <div>
        <strong>{title}</strong>
        <small>Available</small>
      </div>
    </div>
  );
}

export default RestaurantsPage;
