import "../blocks/ReviewsPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Rhome from "../assets/Rhome.png";
import Rsearch from "../assets/Rsearch.png";
import Rbookmark from "../assets/Rbookmark.png";
import Rmap from "../assets/Rmap.png";
import createBack from "../assets/createBack.png";
import authBack from "../assets/auth-back.png";
import RVthumb from "../assets/RVthumb.png";
import RVemoji from "../assets/RVemoji.png";
import RVPF from "../assets/RVPF.png";
import pfp from "../assets/pfp.png";
import RVfood from "../assets/RVfood.png";
import RVRes from "../assets/RVRes.png";
import RVcoffee from "../assets/RVcoffee.png";
import loginCover from "../assets/login-cover.png";
import Mhome from "../assets/Mhome.png";
import Madd from "../assets/Madd.png";
import Mpartner from "../assets/Mpartner.png";
import Mlocal from "../assets/Mlocal.png";
import MFQAs from "../assets/MFQAs.png";
import Mbookmark from "../assets/Mbookmark.png";
import Mperson from "../assets/Mperson.png";
import Rxbt from "../assets/Rxbt.png";
import RVfilter from "../assets/RVfilter.png";
import RVLike from "../assets/RVLike.png";
import RVdis from "../assets/RVdis.png";
import RVlove from "../assets/RVlove.png";
import Rmore from "../assets/Rmore.png";
import report from "../assets/report.png";

function ReviewsPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [parentsLikeMe, setParentsLikeMe] = useState(true);
  const [selectedFilterChips, setSelectedFilterChips] = useState([]);
  const [expandedReviewId, setExpandedReviewId] = useState(null);
  const [openReviewMenuId, setOpenReviewMenuId] = useState(null);

  const isDetailView = expandedReviewId !== null;

  const handleDrawerItemClick = (path) => {
    setIsMenuOpen(false);

    if (path) {
      navigate(path);
    }
  };

  const handleFilterChipClick = (chipLabel) => {
    if (parentsLikeMe) {
      return;
    }

    setSelectedFilterChips((currentChips) =>
      currentChips.includes(chipLabel)
        ? currentChips.filter((chip) => chip !== chipLabel)
        : [...currentChips, chipLabel],
    );
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        event.target.closest(".ReviewsPage__review-card-menu") ||
        event.target.closest(".ReviewsPage__review-card-more")
      ) {
        return;
      }

      setOpenReviewMenuId(null);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <main
      className={`ReviewsPage ${showFilters ? "ReviewsPage--filters-open" : ""}`}
    >
      <aside className="ReviewsPage__sidebar">
        <button
          className="ReviewsPage__menu"
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
        <button
          className="ReviewsPage__sidebar-button"
          type="button"
          onClick={() => navigate("/loggedin")}
        >
          <img src={Rhome} alt="Home" />
        </button>
        <img src={Rsearch} alt="Search" />
        <img src={Rbookmark} alt="Saved restaurants" />
        <button className="ReviewsPage__add" type="button">
          +
        </button>
        <span className="ReviewsPage__profile">LP</span>
      </aside>

      <section className="ReviewsPage__panel">
        <div className="ReviewsPage__topbar">
          <button onClick={() => navigate("/loggedin")} type="button">
            <img src={createBack} alt="Back" />
          </button>
        </div>

        <div className="ReviewsPage__content">
          {!isDetailView && (
            <>
              <div className="ReviewsPage__header-row">
                <div className="ReviewsPage__header-title">
                  <button
                    className="ReviewsPage__subback"
                    type="button"
                    onClick={() => navigate("/restaurantsPage")}
                  >
                    <img src={authBack} alt="Back" />
                  </button>
                  <h1>Reviews</h1>
                </div>
                <button
                  className={`ReviewsPage__filter-button ${showFilters ? "ReviewsPage__filter-button--active" : ""}`}
                  type="button"
                  onClick={() => setShowFilters((current) => !current)}
                >
                  <img src={RVfilter} alt="Filter" />
                </button>
              </div>

              <button
                className="ReviewsPage__review-button"
                type="button"
                onClick={() =>
                  navigate("/restaurantsPage", { state: { openReview: true } })
                }
              >
                Leave a Review
              </button>
            </>
          )}

          {isDetailView && (
            <div className="ReviewsPage__detail-back-row">
              <button
                className="ReviewsPage__detail-back"
                type="button"
                onClick={() => setExpandedReviewId(null)}
              >
                <img src={authBack} alt="Back to reviews" />
              </button>
            </div>
          )}

          {(expandedReviewId === null || expandedReviewId === "me") && (
            <article
              className={`ReviewsPage__review-card ${expandedReviewId === "me" ? "ReviewsPage__review-card--detail" : ""}`}
            >
              <div className="ReviewsPage__review-card-head">
                <img
                  className="ReviewsPage__review-card-avatar"
                  src={RVPF}
                  alt="Reviewer"
                />
                <div className="ReviewsPage__review-card-user">
                  <strong>Me</strong>
                  <p>City, Country</p>
                  <small>Toddlers (1-3)</small>
                </div>
                <div className="ReviewsPage__review-card-menu">
                  <button
                    className="ReviewsPage__review-card-more"
                    type="button"
                    onClick={() =>
                      setOpenReviewMenuId((currentId) =>
                        currentId === "reviews-me" ? null : "reviews-me",
                      )
                    }
                  >
                    <img src={Rmore} alt="More options" />
                  </button>
                  {openReviewMenuId === "reviews-me" && (
                    <div className="ReviewsPage__card-dropdown">
                      <button
                        className="ReviewsPage__card-dropdown-item"
                        type="button"
                        onClick={() => setOpenReviewMenuId(null)}
                      >
                        <span className="ReviewsPage__card-dropdown-icon">↩</span>
                        Share
                      </button>
                      <button
                        className="ReviewsPage__card-dropdown-item ReviewsPage__card-dropdown-item--report"
                        type="button"
                        onClick={() => setOpenReviewMenuId(null)}
                      >
                        <span className="ReviewsPage__card-dropdown-alert"><img src={report} alt="Report" /></span>
                        Report Review
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="ReviewsPage__review-card-meta">
                <span>❤</span> Loved it! &nbsp; 24-02-2024
              </p>

              <p className="ReviewsPage__review-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ut hendrerit enim, vitae ornare nisi...
                <button
                  className="ReviewsPage__review-card-more-link"
                  type="button"
                  onClick={() => setExpandedReviewId("me")}
                >
                  more
                </button>
              </p>

              {expandedReviewId === "me" && (
                <>
                  <p className="ReviewsPage__review-card-text ReviewsPage__review-card-text--detail">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <p className="ReviewsPage__review-card-text ReviewsPage__review-card-text--detail">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                </>
              )}

              {expandedReviewId === "me" ? (
                <div className="ReviewsPage__review-card-images ReviewsPage__review-card-images--detail">
                  <img src={RVfood} alt="Food" />
                  <img src={RVRes} alt="Restaurant" />
                </div>
              ) : (
                <div className="ReviewsPage__review-card-images">
                  <img src={RVfood} alt="Food" />
                  <img src={RVRes} alt="Restaurant" />
                  <img src={RVcoffee} alt="Drink" />
                </div>
              )}

              <div className="ReviewsPage__review-card-tags">
                <span>Allergen Aware</span>
                <span>Kids Menu</span>
                <span>2 Children</span>
                <span>Toddler (1-3)</span>
              </div>

              <p className="ReviewsPage__review-card-footer">
                <img src={RVthumb} alt="Thumbs Up" /> 2 &nbsp; ♡ Add
              </p>
            </article>
          )}

          {(expandedReviewId === null || expandedReviewId === "mittelman") && (
            <article
              className={`ReviewsPage__review-card ${expandedReviewId === "mittelman" ? "ReviewsPage__review-card--detail" : ""}`}
            >
              <div className="ReviewsPage__review-card-head">
                <img
                  className="ReviewsPage__review-card-avatar"
                  src={pfp}
                  alt="Reviewer"
                />
                <div className="ReviewsPage__review-card-user">
                  <strong>Mittelman</strong>
                  <p>City, Country</p>
                  <small>Preschoolers (3-5 years)...</small>
                </div>
                <div className="ReviewsPage__review-card-menu">
                  <button
                    className="ReviewsPage__review-card-more"
                    type="button"
                    onClick={() =>
                      setOpenReviewMenuId((currentId) =>
                        currentId === "reviews-mittelman"
                          ? null
                          : "reviews-mittelman",
                      )
                    }
                  >
                    <img src={Rmore} alt="More options" />
                  </button>
                  {openReviewMenuId === "reviews-mittelman" && (
                    <div className="ReviewsPage__card-dropdown">
                      <button
                        className="ReviewsPage__card-dropdown-item"
                        type="button"
                        onClick={() => setOpenReviewMenuId(null)}
                      >
                        <span className="ReviewsPage__card-dropdown-icon">↩</span>
                        Share
                      </button>
                      <button
                        className="ReviewsPage__card-dropdown-item ReviewsPage__card-dropdown-item--report"
                        type="button"
                        onClick={() => setOpenReviewMenuId(null)}
                      >
                        <span className="ReviewsPage__card-dropdown-alert">!</span>
                        Report Review
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="ReviewsPage__review-card-meta">
                <img src={RVthumb} alt="Thumbs Up" /> Liked it! &nbsp;
                20-02-2024
              </p>

              <p className="ReviewsPage__review-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ut hendrerit enim, vitae ornare nisi...
                <button
                  className="ReviewsPage__review-card-more-link"
                  type="button"
                  onClick={() => setExpandedReviewId("mittelman")}
                >
                  more
                </button>
              </p>

              {expandedReviewId === "mittelman" && (
                <>
                  <p className="ReviewsPage__review-card-text ReviewsPage__review-card-text--detail">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <p className="ReviewsPage__review-card-text ReviewsPage__review-card-text--detail">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </p>
                  <div className="ReviewsPage__review-card-images ReviewsPage__review-card-images--detail">
                    <img src={RVfood} alt="Food plate" />
                    <img src={RVRes} alt="Restaurant crowd" />
                  </div>
                </>
              )}

              <div className="ReviewsPage__review-card-tags">
                <span>Toddler (1-3)</span>
                <span>Teens (13-17)</span>
                <span>2 Children</span>
                <span>Easy Stroller Access</span>
              </div>

              <p className="ReviewsPage__review-card-footer">
                <img src={RVemoji} alt="Emoji" /> Add reaction emoji
              </p>
            </article>
          )}
        </div>
      </section>

      {showFilters && (
        <aside className="ReviewsPage__filters-panel">
          <div className="ReviewsPage__filters-head">
            <button
              className="ReviewsPage__filters-close"
              type="button"
              onClick={() => setShowFilters(false)}
            >
              ×
            </button>
            <h2>FILTERS</h2>
            <button
              className="ReviewsPage__filters-clear-button"
              type="button"
              onClick={() => setSelectedFilterChips([])}
            >
              Clear All
            </button>
          </div>

          <div className="ReviewsPage__filters-content">
            <section className="ReviewsPage__filters-group">
              <h3>Parents Like</h3>
              <div className="ReviewsPage__filters-inline">
                <span>Me</span>
                <button
                  className={`ReviewsPage__filters-toggle ${parentsLikeMe ? "ReviewsPage__filters-toggle--on" : ""}`}
                  type="button"
                  onClick={() => {
                    setParentsLikeMe((current) => {
                      const nextState = !current;

                      if (nextState) {
                        setSelectedFilterChips([]);
                      }

                      return nextState;
                    });
                  }}
                >
                  <span className="ReviewsPage__filters-toggle-knob" />
                </button>
              </div>
            </section>

            <section className="ReviewsPage__filters-group">
              <h3>Sort by</h3>
              <div
                className={`ReviewsPage__filters-chips ${parentsLikeMe ? "ReviewsPage__filters-chips--disabled" : ""}`}
              >
                <button
                  className={
                    selectedFilterChips.includes("From Verified Users")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("From Verified Users")}
                >
                  From Verified Users
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Most Recent")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Most Recent")}
                >
                  Most Recent
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Most Helpful")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Most Helpful")}
                >
                  Most Helpful
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Least Helpful")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Least Helpful")}
                >
                  Least Helpful
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Most Relevant")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Most Relevant")}
                >
                  Most Relevant
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Reviews with Media")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Reviews with Media")}
                >
                  Reviews with Media
                </button>
              </div>
            </section>

            <section className="ReviewsPage__filters-group">
              <h3>Rating</h3>
              <div
                className={`ReviewsPage__filters-chips ReviewsPage__filters-chips--icons ${parentsLikeMe ? "ReviewsPage__filters-chips--disabled" : ""}`}
              >
                <button
                  className={
                    selectedFilterChips.includes("Loved it")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Loved it")}
                >
                  <img src={RVlove} alt="" /> Loved it
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Liked it")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Liked it")}
                >
                  <img src={RVLike} alt="" /> Liked it
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Wouldn't go back")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Wouldn't go back")}
                >
                  <img src={RVdis} alt="" /> Wouldn't go back
                </button>
              </div>
            </section>

            <section className="ReviewsPage__filters-group">
              <h3>Kid's Ages</h3>
              <div
                className={`ReviewsPage__filters-chips ${parentsLikeMe ? "ReviewsPage__filters-chips--disabled" : ""}`}
              >
                <button
                  className={
                    selectedFilterChips.includes("Baby (0-12 months)")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Baby (0-12 months)")}
                >
                  Baby (0-12 months)
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Toddler (1-3)")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Toddler (1-3)")}
                >
                  Toddler (1-3)
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Big Kids (4-7)")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Big Kids (4-7)")}
                >
                  Big Kids (4-7)
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Tween (8-12)")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Tween (8-12)")}
                >
                  Tween (8-12)
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Teen (13-17)")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Teen (13-17)")}
                >
                  Teen (13-17)
                </button>
              </div>
            </section>
            <section className="ReviewsPage__filters-group">
              <h3>Family Needs</h3>
              <div
                className={`ReviewsPage__filters-chips ${parentsLikeMe ? "ReviewsPage__filters-chips--disabled" : ""}`}
              >
                <button
                  className={
                    selectedFilterChips.includes("Family Friendly")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Family Friendly")}
                >
                  Family Friendly
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Menu Options")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Menu Options")}
                >
                  Menu Options
                </button>
                <button
                  className={
                    selectedFilterChips.includes("High Chairs")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("High Chairs")}
                >
                  High Chairs
                </button>
                <button
                  className={
                    selectedFilterChips.includes("Vibe Activities")
                      ? "ReviewsPage__filters-chip-button--active"
                      : ""
                  }
                  type="button"
                  onClick={() => handleFilterChipClick("Vibe Activities")}
                >
                  Vibe Activities
                </button>
              </div>
            </section>

            <button className="ReviewsPage__filters-apply" type="button">
              Apply __ Filters
            </button>
          </div>
        </aside>
      )}

      <img
        className="ReviewsPage__map"
        src={Rmap}
        alt="Map of nearby restaurants"
      />

      {isMenuOpen && (
        <button
          type="button"
          className="ReviewsPage__drawer-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={`ReviewsPage__drawer ${isMenuOpen ? "ReviewsPage__drawer--open" : ""}`}
      >
        <div className="ReviewsPage__drawer-header">
          <img
            src={loginCover}
            alt="Nugget"
            className="ReviewsPage__drawer-logo"
          />
          <button
            type="button"
            className="ReviewsPage__drawer-close"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="ReviewsPage__drawer-nav">
          <button
            type="button"
            onClick={() => handleDrawerItemClick("/loggedin")}
          >
            <img src={Mhome} alt="" /> Home
          </button>
          <button
            type="button"
            onClick={() => handleDrawerItemClick("/restaurantsPage")}
          >
            <img src={Madd} alt="" /> Add a Restaurant
          </button>
          <button type="button" onClick={() => handleDrawerItemClick()}>
            <img src={Mpartner} alt="" /> Restaurant Partner
          </button>
          <button type="button" onClick={() => handleDrawerItemClick()}>
            <img src={Mlocal} alt="" /> Local Heroes
          </button>
          <button type="button" onClick={() => handleDrawerItemClick()}>
            <img src={MFQAs} alt="" /> FAQs
          </button>
          <button type="button" onClick={() => handleDrawerItemClick()}>
            <img src={Mbookmark} alt="" /> Saved Places
          </button>
          <button
            type="button"
            onClick={() => handleDrawerItemClick("/loggedin")}
          >
            <img src={Mperson} alt="" /> Become a Local Hero
          </button>
        </nav>
      </aside>
    </main>
  );
}

export default ReviewsPage;
