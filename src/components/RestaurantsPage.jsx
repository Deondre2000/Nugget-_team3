import "../blocks/RestaurantsPage.css";
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
import authBack from "../assets/auth-back.png";
import { useLocation, useNavigate } from "react-router-dom";
import Rliked from "../assets/Rliked.png";
import Rdislike from "../assets/Rdislike.png";
import Rlove from "../assets/Rlove.png";
import Rreview from "../assets/Rreview.png";
import loginCover from "../assets/login-cover.png";
import pfp from "../assets/pfp.png";
import RVfood from "../assets/RVfood.png";
import RVRes from "../assets/RVRes.png";
import RVcoffee from "../assets/RVcoffee.png";
import Mhome from "../assets/Mhome.png";
import Madd from "../assets/Madd.png";
import Mpartner from "../assets/Mpartner.png";
import Mlocal from "../assets/Mlocal.png";
import MFQAs from "../assets/MFQAs.png";
import Mbookmark from "../assets/Mbookmark.png";
import Mperson from "../assets/Mperson.png";
import RVthumb from "../assets/RVthumb.png";
import RVPF from "../assets/RVPF.png";
import RVemoji from "../assets/RVemoji.png";
import RVFWD from "../assets/RVFWD.png";
import Rmore from "../assets/Rmore.png";
import Resedit from "../assets/Resedit.png";
import { useEffect, useState } from "react";

function RestaurantsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showReview, setShowReview] = useState(false);
  const [showPostedPopup, setShowPostedPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [openReviewMenuId, setOpenReviewMenuId] = useState(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  useEffect(() => {
    if (location.state?.openReview) {
      setShowReview(true);
    }
  }, [location.state]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        event.target.closest(".RestaurantsPage__share-menu") ||
        event.target.closest(".RestaurantsPage__review-card-menu") ||
        event.target.closest(".RestaurantsPage__review-card-more")
      ) {
        return;
      }

      setOpenReviewMenuId(null);
      setIsShareMenuOpen(false);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const toggleTag = (tag) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag],
    );
  };

  const handleDrawerItemClick = (path) => {
    setIsMenuOpen(false);

    if (path) {
      navigate(path);
    }
  };

  return (
    <main className="RestaurantsPage">
      <aside className="RestaurantsPage__sidebar">
        <button
          className="RestaurantsPage__menu"
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
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
            <button onClick={() => navigate("/loggedin")} type="button">
              <img src={createBack} alt="Back" />
            </button>
          </div>
          <div className="RestaurantsPage__review-content">
            <div className="RestaurantsPage__review-subheader">
              <button
                className="RestaurantsPage__review-subback"
                type="button"
                onClick={() => setShowReview(false)}
              >
                <img src={authBack} alt="Back" />
              </button>
              <h1>Leave a review for Gouqi</h1>
            </div>
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
                  className={
                    selectedTags.includes(tag)
                      ? "RestaurantsPage__selected"
                      : ""
                  }
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
              <button
                className="RestaurantsPage__post-review"
                type="button"
                onClick={() => setShowPostedPopup(true)}
              >
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
                <div className="RestaurantsPage__share-menu">
                  <button
                    className="RestaurantsPage__share"
                    type="button"
                    onClick={() => setIsShareMenuOpen((current) => !current)}
                  >
                    <img
                      className="RestaurantsPage__share-icon"
                      src={Redit}
                      alt="Share"
                    />
                  </button>
                  {isShareMenuOpen && (
                    <div className="RestaurantsPage__share-dropdown">
                      <button
                        className="RestaurantsPage__share-dropdown-item"
                        type="button"
                        onClick={() => setIsShareMenuOpen(false)}
                      >
                        <img src={Resedit} alt="Edit" />
                        Edit
                      </button>
                      <button
                        className="RestaurantsPage__share-dropdown-item"
                        type="button"
                        onClick={() => setIsShareMenuOpen(false)}
                      >
                        <span className="RestaurantsPage__share-dropdown-share-icon">↩</span>
                        Share
                      </button>
                    </div>
                  )}
                </div>
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
              <h2 className="RestaurantsPage__reviews">Reviews</h2>{" "}
              <button
                className="RestaurantsPage__review-button"
                type="button"
                onClick={() => setShowReview(true)}
              >
                Leave a Review
              </button>
              <article className="RestaurantsPage__review-card">
                <div className="RestaurantsPage__review-card-head">
                  <img
                    className="RestaurantsPage__review-card-avatar"
                    src={RVPF}
                    alt="Reviewer"
                  />
                  <div className="RestaurantsPage__review-card-user">
                    <strong>Me</strong>
                    <p>City, Country</p>
                    <small>Toddlers (1-3)</small>
                  </div>
                  <div className="RestaurantsPage__review-card-menu">
                    <button
                      className="RestaurantsPage__review-card-more"
                      type="button"
                      onClick={() =>
                        setOpenReviewMenuId((currentId) =>
                          currentId === "restaurants-me"
                            ? null
                            : "restaurants-me",
                        )
                      }
                    >
                      <img src={Rmore} alt="Edit" />
                    </button>
                    {openReviewMenuId === "restaurants-me" && (
                      <div className="RestaurantsPage__card-dropdown">
                        <button
                          className="RestaurantsPage__card-dropdown-item"
                          type="button"
                          onClick={() => setOpenReviewMenuId(null)}
                        >
                          <span className="RestaurantsPage__card-dropdown-icon">↩</span>
                          Share
                        </button>
                        <button
                          className="RestaurantsPage__card-dropdown-item RestaurantsPage__card-dropdown-item--report"
                          type="button"
                          onClick={() => setOpenReviewMenuId(null)}
                        >
                          <span className="RestaurantsPage__card-dropdown-alert">!</span>
                          Report Review
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="RestaurantsPage__review-card-meta">
                  <span>❤</span> Loved it! &nbsp; 24-02-2024
                </p>

                <p className="RestaurantsPage__review-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus ut hendrerit enim, vitae ornare nisi...more
                </p>

                <div className="RestaurantsPage__review-card-images">
                  <img src={RVfood} alt="Food" />
                  <img src={RVRes} alt="Restaurant" />
                  <img src={RVcoffee} alt="Drink" />
                </div>

                <div className="RestaurantsPage__review-card-tags">
                  <span>Allergen Aware</span>
                  <span>Kids Menu</span>
                  <span>2 Children</span>
                  <span>Toddler (1-3)</span>
                </div>

                <p className="RestaurantsPage__review-card-footer">
                  <img src={RVthumb} alt="Thumbs Up" /> 2 &nbsp; ♡ Add
                </p>
              </article>
              <article className="RestaurantsPage__review-card">
                <div className="RestaurantsPage__review-card-head">
                  <img
                    className="RestaurantsPage__review-card-avatar"
                    src={pfp}
                    alt="Reviewer"
                  />
                  <div className="RestaurantsPage__review-card-user">
                    <strong>Mittelman</strong>
                    <p>City, Country</p>
                    <small>Preschoolers (3-5 years)...</small>
                  </div>
                  <div className="RestaurantsPage__review-card-menu">
                    <button
                      className="RestaurantsPage__review-card-more"
                      type="button"
                      onClick={() =>
                        setOpenReviewMenuId((currentId) =>
                          currentId === "restaurants-mittelman"
                            ? null
                            : "restaurants-mittelman",
                        )
                      }
                    >
                      <img src={Rmore} alt="Edit" />
                    </button>
                    {openReviewMenuId === "restaurants-mittelman" && (
                      <div className="RestaurantsPage__card-dropdown">
                        <button
                          className="RestaurantsPage__card-dropdown-item"
                          type="button"
                          onClick={() => setOpenReviewMenuId(null)}
                        >
                          <span className="RestaurantsPage__card-dropdown-icon">↩</span>
                          Share
                        </button>
                        <button
                          className="RestaurantsPage__card-dropdown-item RestaurantsPage__card-dropdown-item--report"
                          type="button"
                          onClick={() => setOpenReviewMenuId(null)}
                        >
                          <span className="RestaurantsPage__card-dropdown-alert">!</span>
                          Report Review
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="RestaurantsPage__review-card-meta">
                  <img src={RVthumb} alt="Thumbs Up" /> Liked it! &nbsp;
                  20-02-2024
                </p>

                <p className="RestaurantsPage__review-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus ut hendrerit enim, vitae ornare nisi...more
                </p>

                <div className="RestaurantsPage__review-card-tags">
                  <span>Toddler (1-3)</span>
                  <span>Teens (13-17)</span>
                  <span>2 Children</span>
                  <span>Easy Stroller Access</span>
                </div>

                <p className="RestaurantsPage__review-card-footer">
                  <span>
                    <img src={RVemoji} alt="Emoji" />
                  </span>
                  Add reaction emoji
                </p>
              </article>
              <button
                className="RestaurantsPage__review-button RestaurantsPage__review-button-all"
                onClick={() => navigate("/reviews")}
                type="button"
              >
                See all reviews
                <span>
                  <img src={RVFWD} alt="Reviewer" />
                </span>
              </button>
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

      {showPostedPopup && (
        <div className="RestaurantsPage__review-posted-overlay" role="dialog">
          <div className="RestaurantsPage__review-posted-card">
            <button
              className="RestaurantsPage__review-posted-close"
              type="button"
              onClick={() => setShowPostedPopup(false)}
            >
              ×
            </button>
            <h3 id="review-posted-title">Review Posted</h3>
            <p>Your review has been successfully posted!</p>
            <img src={Rreview} alt="Review posted illustration" />
            <button
              className="RestaurantsPage__review-posted-primary"
              type="button"
              onClick={() => setShowPostedPopup(false)}
            >
              See your posted review!
            </button>
            <button
              className="RestaurantsPage__review-posted-exit"
              type="button"
              onClick={() => setShowPostedPopup(false)}
            >
              Exit
            </button>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <button
          type="button"
          className="RestaurantsPage__drawer-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={`RestaurantsPage__drawer ${isMenuOpen ? "RestaurantsPage__drawer--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="RestaurantsPage__drawer-header">
          <img
            src={loginCover}
            alt="Nugget"
            className="RestaurantsPage__drawer-logo"
          />
          <button
            type="button"
            className="RestaurantsPage__drawer-close"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="RestaurantsPage__drawer-nav">
          <button
            className="RestaurantsPage__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick("/loggedin")}
          >
            <img src={Mhome} alt="" />
            Home
          </button>
          <button
            className="RestaurantsPage__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick("/restaurantsPage")}
          >
            <img src={Madd} alt="" />
            Add a Restaurant
          </button>
          <button
            className="RestaurantsPage__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={Mpartner} alt="" />
            Restaurant Partner
          </button>
          <button
            className="RestaurantsPage__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={Mlocal} alt="" />
            Local Heroes
          </button>
          <button
            className="RestaurantsPage__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={MFQAs} alt="" />
            FAQs
          </button>
          <button
            className="RestaurantsPage__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={Mbookmark} alt="" />
            Saved Places
          </button>
          <button
            className="RestaurantsPage__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick("/loggedin")}
          >
            <img src={Mperson} alt="" />
            Become a Local Hero
          </button>
        </nav>
      </aside>

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
