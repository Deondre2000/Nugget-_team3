import "../blocks/Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createBack from "../assets/createBack.png";
import loginCover from "../assets/login-cover.png";
import Mhome from "../assets/Mhome.png";
import Madd from "../assets/Madd.png";
import Mpartner from "../assets/Mpartner.png";
import Mlocal from "../assets/Mlocal.png";
import MFQAs from "../assets/MFQAs.png";
import Mbookmark from "../assets/Mbookmark.png";
import Mperson from "../assets/Mperson.png";
import Rhome from "../assets/Rhome.png";
import Rsearch from "../assets/Rsearch.png";
import Rbookmark from "../assets/Rbookmark.png";
import banner from "../assets/Profile.png";
import pfp2 from "../assets/pfp2.png";
import highChairs from "../assets/high-chairs.png";
import wheelchair from "../assets/wheelchair.png";
import healthy from "../assets/healthy.png";
import downtown from "../assets/downtown.png";
import daddy from "../assets/daddy.png";
import resident from "../assets/resident.png";
import frog from "../assets/frog.png";
import Pcat from "../assets/Pcat.png";
import Pdeer from "../assets/Pdeer.png";
import sheep from "../assets/sheep.png";
import Pmouse from "../assets/Pmouse.png";
import createEditT from "../assets/create-editT.png";
import LoggedIn from "./loggedIn";

const kids = [
  { label: "Baby", icon: frog },
  { label: "Toddler", icon: Pmouse, count: 2 },
  { label: "Big Kid", icon: Pcat },
  { label: "Tween", icon: sheep },
  { label: "Teen", icon: Pdeer },
];

const needSections = [
  {
    title: "Family Needs",
    icon: highChairs,
    options: [
      { label: "Baby Friendly", color: "green" },
      { label: "Kids Menu", color: "green" },
      { label: "Kids Menu", color: "green" },
      { label: "Kids Menu", color: "green" },
    ],
  },
  {
    title: "Accessibility",
    icon: wheelchair,
    options: [{ label: "Wheelchair Accessible", color: "blue" }],
  },
  {
    title: "Dietary Options",
    icon: healthy,
    options: [
      { label: "Gluten Free", color: "purple" },
      { label: "Dairy Free", color: "pink" },
    ],
  },
];

const communityGroups = [
  { label: "Daddy Stroller Club", image: daddy },
  { label: "Downtown Lunch Crew", image: downtown },
  { label: "Resident Diners", image: resident },
];

function ProfilePage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDrawerItemClick = (path) => {
    setIsMenuOpen(false);

    if (path) {
      navigate(path);
    }
  };

  return (
    <main className="Profile">
      <aside className="Profile__sidebar">
        <button
          className="Profile__menu"
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
        <button
          className="Profile__sidebar-button"
          type="button"
          onClick={() => navigate("/loggedin")}
        >
          <img src={Rhome} alt="Home" />
        </button>
        <button className="Profile__sidebar-button" type="button">
          <img src={Rsearch} alt="Search" />
        </button>
        <button className="Profile__sidebar-button" type="button">
          <img src={Rbookmark} alt="Saved restaurants" />
        </button>
        <button className="Profile__add" type="button">
          +
        </button>
        <span className="Profile__avatar">LP</span>
      </aside>

      <section className="Profile__panel">
        <div className="Profile__topbar">
          <button type="button" onClick={() => navigate("/loggedin")}>
            <img src={createBack} alt="Back" />
          </button>
        </div>

        <div className="Profile__banner">
          <img className="Profile__banner-image" src={banner} alt="" />
          <button
            className="Profile__banner-edit"
            type="button"
            onClick={() => navigate("/EditProfile")}
          >
            <img src={createEditT} alt="Edit banner" />
          </button>
          <div className="Profile__banner-avatar">
            <img src={pfp2} alt="Profile" />
          </div>
        </div>

        <div className="Profile__body">
          <div className="Profile__name-row">
            <h1>RogersAndKids</h1>
            <button
              className="Profile__edit-link"
              type="button"
              onClick={() => navigate("/EditProfile")}
            >
              Edit
            </button>
          </div>
          <p className="Profile__location">Duluth, Minnesota</p>
          <p className="Profile__bio">Just a dad with alot of kids!!</p>

          <hr className="Profile__divider" />

          <section className="Profile__section">
            <div className="Profile__section-header">
              <h2>
                Kids <span className="Profile__public">(Public)</span>
              </h2>
              <button className="Profile__edit-link" type="button">
                Edit
              </button>
            </div>
            <div className="Profile__kids-row">
              {kids.map(({ label, icon, count }) => (
                <div className="Profile__kid" key={label}>
                  <div className="Profile__kid-icon">
                    <img src={icon} alt="" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="Profile__section">
            <div className="Profile__section-header">
              <h2>
                Needs <span className="Profile__public">(Public)</span>
              </h2>
              <button className="Profile__edit-link" type="button">
                Edit
              </button>
            </div>
            <div className="Profile__needs-columns">
              {needSections.map((section) => (
                <div className="Profile__needs-column" key={section.title}>
                  <span className="Profile__needs-label">{section.title}</span>
                  <div className="Profile__tags">
                    {section.options.map((option, index) => (
                      <button
                        type="button"
                        key={`${section.title}-${index}`}
                        className={`Profile__tag Profile__tag--${option.color}`}
                      >
                        <span className="Profile__tag-icon">
                          <img src={section.icon} alt="" />
                        </span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="Profile__needs-expand">
              ⌄
            </button>
          </section>

          <section className="Profile__section">
            <div className="Profile__section-header">
              <h2>
                Community Groups{" "}
                <span className="Profile__public">(Public)</span>
              </h2>
              <button className="Profile__edit-link" type="button">
                Edit
              </button>
            </div>
            <div className="Profile__groups-row">
              {communityGroups.map(({ label, image }) => (
                <div className="Profile__group" key={label}>
                  <img src={image} alt={label} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="Profile__section">
            <div className="Profile__section-header">
              <h2>
                Saved Restaurants{" "}
                <span className="Profile__public">(Public)</span>
              </h2>
              <button className="Profile__edit-link" type="button">
                Edit
              </button>
            </div>
          </section>
        </div>
      </section>

      {isMenuOpen && (
        <button
          type="button"
          className="Profile__drawer-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={`Profile__drawer ${isMenuOpen ? "Profile__drawer--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="Profile__drawer-header">
          <img src={loginCover} alt="Nugget" className="Profile__drawer-logo" />
          <button
            type="button"
            className="Profile__drawer-close"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="Profile__drawer-nav">
          <button
            className="Profile__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick("/loggedin")}
          >
            <img src={Mhome} alt="" />
            Home
          </button>
          <button
            className="Profile__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick("/restaurantsPage")}
          >
            <img src={Madd} alt="" />
            Add a Restaurant
          </button>
          <button
            className="Profile__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={Mpartner} alt="" />
            Restaurant Partner
          </button>
          <button
            className="Profile__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={Mlocal} alt="" />
            Local Heroes
          </button>
          <button
            className="Profile__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={MFQAs} alt="" />
            FAQs
          </button>
          <button
            className="Profile__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick()}
          >
            <img src={Mbookmark} alt="" />
            Saved Places
          </button>
          <button
            className="Profile__drawer-nav-button"
            type="button"
            onClick={() => handleDrawerItemClick("/loggedin")}
          >
            <img src={Mperson} alt="" />
            Become a Local Hero
          </button>
        </nav>
      </aside>
    </main>
  );
}

export default ProfilePage;
