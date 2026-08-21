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
import Rliked from "../assets/Rliked.png";
import Rdislike from "../assets/Rdislike.png";
import Rlove from "../assets/Rlove.png";
import { useState } from "react";

function RestaurantsPage() {
  const navigate = useNavigate();
  const [showReview, setShowReview] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag],
    );
  };

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

      {showReview ? (
        <section className="RestaurantsPage__review-page">
          <div className="RestaurantsPage__topbar">
            <button onClick={() => setShowReview(false)} type="button">
              <img src={createBack} alt="Back" />
            </button>
          </div>
          <div className="RestaurantsPage__review-content">
            <h1>Leave a review for Gouqi</h1>
            <h2>How was your experience?</h2>
            <button
              className={`RestaurantsPage__review-choice ${selectedExperience === "loved" ? "RestaurantsPage__selected" : ""}`}
              type="button"
              onClick={() => setSelectedExperience("loved")}
            >
              <img src={Rlove} alt="" /> Loved it!
            </button>
            <button
              className={`RestaurantsPage__review-choice ${selectedExperience === "liked" ? "RestaurantsPage__selected" : ""}`}
              type="button"
              onClick={() => setSelectedExperience("liked")}
            >
              <img src={Rliked} alt="" /> Liked it!
            </button>
            <button
              className={`RestaurantsPage__review-choice ${selectedExperience === "not-liked" ? "RestaurantsPage__selected" : ""}`}
              type="button"
              onClick={() => setSelectedExperience("not-liked")}
            >
              <img src={Rdislike} alt="" /> Wouldn't go back
            </button>
            <h2>
              Care to share more? <span>(Optional)</span>
            </h2>
            <p className="RestaurantsPage__review-label">
              <span>Tags</span> {selectedTags.length} / 5
            </p>
            <div className="RestaurantsPage__review-tabs">
              <button
                className="RestaurantsPage__review-tab-active"
                type="button"
              >
                Kid's Ages
              </button>
              <button type="button">Family Needs</button>
              <button type="button">Accessibility</button>
              <button type="button">Dietary Options</button>
              <button type="button">Service &amp; Atmosphere</button>
            </div>
            <div className="RestaurantsPage__review-tags">
              {[
                "Baby (0-12 months)",
                "Toddler (1-3)",
                "Big Kids (4-7)",
                "Tween (8-12)",
                "Teen (13-17)",
              ].map((tag) => (
                <button
                  className={selectedTags.includes(tag) ? "RestaurantsPage__selected" : ""}
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <textarea placeholder="Share anything that might help other families..." />
            <button className="RestaurantsPage__photo-button" type="button">
              Add Photos or Videos
            </button>
            <div className="RestaurantsPage__review-actions">
              <button className="RestaurantsPage__post-review" type="button">
                Post Review
              </button>
              <button
                className="RestaurantsPage__clear-review"
                type="button"
                onClick={() => {
                  setSelectedExperience("");
                  setSelectedTags([]);
                }}
              >
                Clear All
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="RestaurantsPage__details">
            <div className="RestaurantsPage__topbar">
              <button onClick={() => navigate("/loggedin")} type="button">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ut hendrerit enim, vitae ornare nisi.
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
              <button
                className="RestaurantsPage__review-button"
                type="button"
                onClick={() => setShowReview(true)}
              >
                Leave a Review
              </button>
            </div>
          </section>

          <section className="RestaurantsPage__features">
            <h2>Family Features</h2>
            <RestaurantsPageFeature image={Rhealthy} title="Kids Menu" />
            <RestaurantsPageFeature image={Rhealthy} title="High Chairs" />
            <RestaurantsPageFeature
              image={Rcolor}
              title="Coloring Activities"
            />
            <RestaurantsPageFeature
              image={Rbaby}
              title="Baby Change (Unisex)"
            />
            <h2 className="RestaurantsPage__dietary-title">Dietary Options</h2>
            <RestaurantsPageFeature
              image={Rvegatarian}
              title="Vegetarian Options"
            />
            <RestaurantsPageFeature image={Rvegan} title="Vegan Options" />
            <RestaurantsPageFeature
              image={RGluten}
              title="Gluten-Free Options"
            />
            <RestaurantsPageFeature image={Rhealthy} title="Healthy Options" />
          </section>
        </>
      )}

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
