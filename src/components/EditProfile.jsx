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
import icons from "../assets/icons.png";
import Rxbt from "../assets/Rxbt.png";
import publicIcon from "../assets/public.png";
import publicIcon2 from "../assets/public-drop.png";
import frog from "../assets/frog.png";
import rat from "../assets/rat.png";
import cat from "../assets/cat.png";
import sheep from "../assets/sheep.png";
import deer from "../assets/deer.png";
import highChairs from "../assets/high-chairs.png";
import wheelchair from "../assets/wheelchair.png";
import healthy from "../assets/healthy.png";
import check from "../assets/check.png";
import Pliekd from "../assets/Pliekd.png";
import Prest1 from "../assets/Prest1.png";
import Prest2 from "../assets/Prest2.png";
import Prest3 from "../assets/Prest3.png";
import Prest4 from "../assets/Pres4.png";
import Prest5 from "../assets/Prest5.png";
import Prest6 from "../assets/Prest6.png";
import Prest7 from "../assets/Prest7.png";
import Prest8 from "../assets/Prest8.png";
import daddy from "../assets/daddy.png";
import downtown from "../assets/downtown.png";
import resident from "../assets/resident.png";
import Rmore from "../assets/Rmore.png";
import loggedEX from "../assets/loggedEX.png";
import Pmanage from "../assets/Pmanage.png";
import Pprofile from "../assets/Pprofile.png";

const tabs = [
  { label: "Edit Profile", icon: PprofileG, key: "profile" },
  { label: "Edit Kids Profile", icon: PkidsG, key: "kids" },
  { label: "Edit Needs", icon: Pneeds, key: "needs" },
  { label: "Edit Saved Restaurants", icon: Pbookmark, key: "saved" },
  { label: "Edit Community Groups", icon: Pcommunity, key: "groups" },
];

const kidsMeta = [
  { key: "baby", label: "Baby", ageRange: "(0 - 12 months)", icon: frog },
  { key: "toddler", label: "Toddler", ageRange: "(1 - 3)", icon: rat },
  { key: "bigKid", label: "Big Kid", ageRange: "(4 - 7)", icon: cat },
  { key: "tween", label: "Tween", ageRange: "(8 - 12)", icon: sheep },
  { key: "teen", label: "Teen", ageRange: "(13 - 17)", icon: deer },
];

const needSections = [
  {
    title: "Family Needs",
    icon: highChairs,
    color: "green",
    options: [
      "Baby Friendly",
      "Kids Menu",
      "High Chairs",
      "Playground",
      "Baby Change (Women's)",
      "Baby Change (Men's)",
      "Baby Change (Unisex)",
      "Nursing Friendly",
      "Step-Free Entry",
      "Allergen Aware",
    ],
  },
  {
    title: "Accessibility",
    icon: wheelchair,
    color: "blue",
    options: [
      "Wheelchair Accessible",
      "Outdoor Seating",
      "Air Conditioning",
      "Dog Friendly",
      "Wheelchair Accessible",
      "Wheelchair Accessible",
      "Wheelchair Accessible",
      "Wheelchair Accessible",
      "Wheelchair Accessible",
      "Wheelchair Accessible",
    ],
  },
  {
    title: "Dietary Options",
    icon: healthy,
    color: "pink",
    options: [
      "Gluten Free",
      "Dairy Free",
      "Healthy Options",
      "Vegan Options",
      "Vegetarian Options",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
    ],
  },
];

const savedRestaurants = [
  {
    name: "Max's Cafeteria",
    likes: 10,
    price: "$",
    category: "All-you-can-eat",
    address: "1629 Alpaca Way",
    image: Prest2,
  },
  {
    name: "Al-Imam",
    likes: 6,
    price: "$$",
    category: "Indian",
    address: "1773 Eagle Drive",
    image: Prest1,
  },
  {
    name: "Qia 19 Eatery",
    likes: 12,
    price: "$",
    category: "Chinese",
    address: "3604 Duncan Avenue",
    image: Prest4,
  },
  {
    name: "Golden Pizza",
    likes: 8,
    price: "$$",
    category: "Pub",
    address: "2301 Davis Avenue",
    image: Prest7,
  },
  {
    name: "Burger Stationary",
    likes: 14,
    price: "$",
    category: "American",
    address: "980 Foxglove Street",
    image: Prest3,
  },
  {
    name: "Francisco's Diner",
    likes: 9,
    price: "$$",
    category: "Diner",
    address: "215 Marlin Court",
    image: Prest6,
  },
  {
    name: "Garden of Eating",
    likes: 11,
    price: "$$",
    category: "Vegetarian",
    address: "44 Willow Lane",
    image: Prest5,
  },
  {
    name: "Lakeside Eatery",
    likes: 7,
    price: "$",
    category: "Seafood",
    address: "12 Harbor Drive",
    image: Prest8,
  },
];

const communityGroups = [
  { label: "Daddy Stroller Club", image: daddy },
  { label: "Downtown Lunch Crew", image: downtown },
  { label: "Resident Diners", image: resident },
];

function PublicToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState("Public");

  return (
    <div className="EditProfile__public-toggle">
      <button
        type="button"
        className="EditProfile__public-button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <img
          src={publicIcon}
          alt="Public"
          className="EditProfile__public-icon"
        />
        {visibility}
        <img
          src={publicIcon2}
          alt="Dropdown"
          className="EditProfile__public-dropdown"
        />
      </button>
      {isOpen && (
        <div className="EditProfile__public-menu">
          <button
            type="button"
            className={
              visibility === "Public"
                ? "EditProfile__public-menu-item EditProfile__public-menu-item--active"
                : "EditProfile__public-menu-item"
            }
            onClick={() => {
              setVisibility("Public");
              setIsOpen(false);
            }}
          >
            Public
          </button>
          <button
            type="button"
            className={
              visibility === "Private"
                ? "EditProfile__public-menu-item EditProfile__public-menu-item--active"
                : "EditProfile__public-menu-item"
            }
            onClick={() => {
              setVisibility("Private");
              setIsOpen(false);
            }}
          >
            Private
          </button>
        </div>
      )}
    </div>
  );
}

function EditProfilePage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [openGroupMenu, setOpenGroupMenu] = useState(null);
  const [counts, setCounts] = useState({
    baby: 1,
    toddler: 0,
    bigKid: 0,
    tween: 0,
    teen: 0,
  });
  const [selectedNeeds, setSelectedNeeds] = useState({
    "Family Needs-0": true,
    "Family Needs-1": true,
    "Family Needs-2": true,
    "Family Needs-5": true,
    "Family Needs-6": true,
    "Accessibility-0": true,
    "Dietary Options-0": true,
    "Dietary Options-1": true,
  });

  const nextStep = () =>
    setStep((previousStep) => Math.min(previousStep + 1, tabs.length - 1));

  const updateCount = (key, delta) => {
    setCounts((previousCounts) => ({
      ...previousCounts,
      [key]: Math.max(0, previousCounts[key] + delta),
    }));
  };

  const toggleNeed = (needId) => {
    setSelectedNeeds((previousNeeds) => ({
      ...previousNeeds,
      [needId]: !previousNeeds[needId],
    }));
  };

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
                <img src={Rxbt} alt="Close" />
              </button>
              <h2>Edit Tab</h2>
            </div>
            <hr className="EditProfile__tabs-divider" />
            <nav className="EditProfile__tabs-nav">
              {tabs.map((tab, index) => (
                <button
                  type="button"
                  key={tab.key}
                  onClick={() => setStep(index)}
                  className={
                    step === index
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
            {step === 0 && (
              <>
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
                    <img src={icons} alt="Edit name" />
                  </button>
                </div>

                <hr className="EditProfile__divider" />

                <form
                  className="EditProfile__form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    nextStep();
                  }}
                >
                  <div className="EditProfile__field-row">
                    <div className="EditProfile__field">
                      <label htmlFor="edit-profile-first-name">
                        First Name
                      </label>
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
              </>
            )}

            {step === 1 && (
              <>
                <h1 className="EditProfile__title">Edit Kids Profile</h1>
                <hr className="EditProfile__divider" />

                <form
                  className="EditProfile__form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    nextStep();
                  }}
                >
                  <div className="EditProfile__public-row">
                    <PublicToggle />
                    <p className="EditProfile__public-text">
                      (Allow the public to view this section)
                    </p>
                  </div>

                  <div className="EditProfile__kids-grid">
                    {kidsMeta.map(({ key, label, ageRange, icon }) => (
                      <div className="EditProfile__kid-item" key={key}>
                        <div className="EditProfile__kid-icon">
                          <img src={icon} alt="" />
                        </div>
                        <p className="EditProfile__kid-label">{label}</p>
                        <p className="EditProfile__kid-age">{ageRange}</p>
                        <div className="EditProfile__count-row">
                          <button
                            type="button"
                            className="EditProfile__count-button"
                            onClick={() => updateCount(key, -1)}
                          >
                            -
                          </button>
                          <span className="EditProfile__count-value">
                            {counts[key]}
                          </span>
                          <button
                            type="button"
                            className="EditProfile__count-button"
                            onClick={() => updateCount(key, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
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
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="EditProfile__title">Edit Needs</h1>
                <hr className="EditProfile__divider" />

                <form
                  className="EditProfile__form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    nextStep();
                  }}
                >
                  <div className="EditProfile__public-row">
                    <PublicToggle />
                    <p className="EditProfile__public-text">
                      (Allow the public to view this section)
                    </p>
                  </div>

                  <p className="EditProfile__needs-instruction">
                    (Select all that apply)
                  </p>

                  <div className="EditProfile__needs-sections">
                    {needSections.map((section) => (
                      <section
                        className="EditProfile__needs-section"
                        key={section.title}
                      >
                        <h3 className="EditProfile__needs-title">
                          {section.title} -{" "}
                          {
                            section.options.filter(
                              (_, index) =>
                                selectedNeeds[`${section.title}-${index}`],
                            ).length
                          }
                        </h3>
                        <div className="EditProfile__needs-grid">
                          {section.options.map((option, index) => {
                            const needId = `${section.title}-${index}`;
                            const isSelected = selectedNeeds[needId];

                            return (
                              <button
                                type="button"
                                key={needId}
                                className={`EditProfile__need-button EditProfile__need-button--${section.color}${isSelected ? " EditProfile__need-button--selected" : ""}`}
                                onClick={() => toggleNeed(needId)}
                              >
                                <span className="EditProfile__need-icon">
                                  <img src={section.icon} alt="" />
                                </span>
                                <span className="EditProfile__need-label">
                                  {option}
                                </span>
                                {isSelected && (
                                  <span className="EditProfile__need-check">
                                    <img src={check} alt="Selected" />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          className="EditProfile__needs-expand"
                        >
                          ⌄
                        </button>
                      </section>
                    ))}
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
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="EditProfile__title">Edit Saved Restaurants</h1>
                <hr className="EditProfile__divider" />

                <form
                  className="EditProfile__form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    nextStep();
                  }}
                >
                  <div className="EditProfile__public-row">
                    <PublicToggle />
                    <p className="EditProfile__public-text">
                      (Allow the public to view this section)
                    </p>
                  </div>

                  <div className="EditProfile__restaurants-grid">
                    {savedRestaurants.map((restaurant) => (
                      <div
                        className="EditProfile__restaurant-card"
                        key={restaurant.name}
                      >
                        <img
                          className="EditProfile__restaurant-image"
                          src={restaurant.image}
                          alt={restaurant.name}
                        />
                        <p className="EditProfile__restaurant-name">
                          {restaurant.name}
                        </p>
                        <p className="EditProfile__restaurant-meta">
                          <img src={Pliekd} alt="" />
                          {restaurant.likes} likes · {restaurant.price} ·{" "}
                          {restaurant.category}
                        </p>
                        <p className="EditProfile__restaurant-address">
                          {restaurant.address}
                        </p>
                      </div>
                    ))}
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
              </>
            )}

            {step === 4 && (
              <>
                <h1 className="EditProfile__title">Edit Community Groups</h1>
                <hr className="EditProfile__divider" />

                <form
                  className="EditProfile__form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    navigate("/Profile");
                  }}
                >
                  <div className="EditProfile__public-row">
                    <PublicToggle />
                    <p className="EditProfile__public-text">
                      (Allow the public to view this section)
                    </p>
                  </div>

                  <div className="EditProfile__groups-grid">
                    {communityGroups.map(({ label, image }) => (
                      <div className="EditProfile__group-card" key={label}>
                        <div className="EditProfile__group-image-wrap">
                          <img
                            className="EditProfile__group-photo"
                            src={image}
                            alt={label}
                          />
                          <button
                            type="button"
                            className="EditProfile__group-more"
                            onClick={() =>
                              setOpenGroupMenu((current) =>
                                current === label ? null : label,
                              )
                            }
                          >
                            <img src={Rmore} alt="More options" />
                          </button>
                          {openGroupMenu === label && (
                            <div className="EditProfile__group-menu">
                              <button type="button">
                                <span>
                                  <img src={Pprofile} alt="" />
                                </span>
                                View Group Profile
                              </button>
                              <button type="button">
                                <span>
                                  <img src={Pmanage} alt="" />
                                </span>
                                Manage
                              </button>
                              <button
                                type="button"
                                className="EditProfile__group-menu-leave"
                              >
                                <img src={loggedEX} alt="" />
                                Leave Group
                              </button>
                            </div>
                          )}
                        </div>
                        <p className="EditProfile__group-label">{label}</p>
                      </div>
                    ))}
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
                    <button
                      type="button"
                      className="EditProfile__add-group-button"
                    >
                      Add or Create a New Group
                    </button>
                  </div>
                </form>
              </>
            )}
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
