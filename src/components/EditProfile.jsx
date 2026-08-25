import "../blocks/Profile.css";
import "../blocks/EditProfile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createBack from "../assets/createBack.png";
import createEditT from "../assets/create-editT.png";
import banner from "../assets/Profile.png";
import pfp2 from "../assets/pfp2.png";
import Rhome from "../assets/Rhome.png";
import Rsearch from "../assets/Rsearch.png";
import Rbookmark from "../assets/Rbookmark.png";
import PprofileG from "../assets/PprofileG.png";
import PkidsG from "../assets/PkidsG.png";
import Pneeds from "../assets/Pneeds.png";
import Pbookmark from "../assets/Pbookmark.png";
import Pcommunity from "../assets/Pcommunity.png";
import loginCover from "../assets/login-cover.png";
import Mhome from "../assets/Mhome.png";
import Madd from "../assets/Madd.png";
import Mpartner from "../assets/Mpartner.png";
import Mlocal from "../assets/Mlocal.png";
import MFQAs from "../assets/MFQAs.png";
import Mbookmark from "../assets/Mbookmark.png";

const tabs = [
  { label: "Edit Profile", icon: PprofileG, key: "profile" },
  { label: "Edit Kids Profile", icon: PkidsG, key: "kids" },
  { label: "Edit Needs", icon: Pneeds, key: "needs" },
  { label: "Edit Saved Restaurants", icon: Pbookmark, key: "saved" },
  { label: "Edit Community Groups", icon: Pcommunity, key: "groups" },
];

function EditProfilePage() {
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
          <button type="button" onClick={() => navigate("/Profile")}>
            <img src={createBack} alt="Back" />
          </button>
        </div>

        <div className="Profile__banner">
          <img className="Profile__banner-image" src={banner} alt="" />
          <button className="Profile__banner-edit" type="button">
            <img src={createEditT} alt="Edit banner" />
          </button>
        </div>

        <div className="EditProfile__body">
          <aside className="EditProfile__tabs">
            <div className="EditProfile__tabs-header">
              <button
                type="button"
                className="EditProfile__tabs-close"
                onClick={() => navigate("/Profile")}
              >
                ×
              </button>
              <h2>Edit Tab</h2>
            </div>
            <hr className="EditProfile__tabs-divider" />
            <nav className="EditProfile__tabs-nav">
              {tabs.map((tab, index) => (
                <button
                  type="button"
                  key={tab.key}
                  className={
                    index === 0
                      ? "EditProfile__tabs-item EditProfile__tabs-item--active"
                      : "EditProfile__tabs-item"
                  }
                >
                  <span className="EditProfile__tabs-icon">
                    <img src={tab.icon} alt="" />
                  </span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <section className="EditProfile__form-panel">
            <div className="EditProfile__avatar-row">
              <div className="EditProfile__avatar">
                <img src={pfp2} alt="Profile" />
                <button type="button" className="EditProfile__avatar-edit">
                  <img src={createEditT} alt="Edit photo" />
                </button>
              </div>
              <h1 className="EditProfile__title">Edit Profile</h1>
            </div>

            <div className="EditProfile__name-row">
              <h2>RogersAndKids</h2>
              <button type="button" className="EditProfile__name-edit">
                <img src={createEditT} alt="Edit name" />
              </button>
            </div>

            <hr className="EditProfile__divider" />

            <form
              className="EditProfile__form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="EditProfile__field-row">
                <div className="EditProfile__field">
                  <label htmlFor="edit-profile-first-name">First Name</label>
                  <input
                    className="EditProfile__input"
                    id="edit-profile-first-name"
                    type="text"
                    placeholder="Rogers"
                  />
                </div>
                <div className="EditProfile__field">
                  <label htmlFor="edit-profile-last-name">Last Name</label>
                  <input
                    className="EditProfile__input"
                    id="edit-profile-last-name"
                    type="text"
                    placeholder="Alexander"
                  />
                </div>
              </div>

              <div className="EditProfile__field EditProfile__field--full">
                <label htmlFor="edit-profile-address">Address</label>
                <input
                  className="EditProfile__input"
                  id="edit-profile-address"
                  type="text"
                  placeholder="1366 Eagle Lane"
                />
              </div>

              <div className="EditProfile__field-row">
                <div className="EditProfile__field">
                  <label htmlFor="edit-profile-country">Country</label>
                  <select
                    className="EditProfile__input"
                    id="edit-profile-country"
                  >
                    <option>US</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div className="EditProfile__field">
                  <label htmlFor="edit-profile-state">State</label>
                  <select
                    className="EditProfile__input"
                    id="edit-profile-state"
                  >
                    <option>Minnesota</option>
                    <option>California</option>
                    <option>Texas</option>
                  </select>
                </div>
              </div>

              <div className="EditProfile__field EditProfile__field--full">
                <label htmlFor="edit-profile-about">About</label>
                <textarea
                  className="EditProfile__textarea"
                  id="edit-profile-about"
                  rows="3"
                  placeholder="Just a dad with alot of kids!!"
                />
              </div>

              <div className="EditProfile__button-row">
                <button
                  type="button"
                  className="EditProfile__cancel-button"
                  onClick={() => navigate("/Profile")}
                >
                  Cancel
                </button>
                <button type="submit" className="EditProfile__save-button">
                  Save Changes
                </button>
              </div>
            </form>
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
        </nav>
      </aside>
    </main>
  );
}

export default EditProfilePage;
