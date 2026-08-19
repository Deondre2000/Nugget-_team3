import "../blocks/CreateAccount.css";
import { useNavigate } from "react-router-dom";
import createPic from "../assets/createPic.png";
import createBack from "../assets/createBack.png";
import PFP from "../assets/pfp.png";
import edit from "../assets/icons.png";
import authBack from "../assets/auth-back.png";
import icon from "../assets/create-icon.png";
import bear from "../assets/create-bear.png";
import finish from "../assets/create-finish.png";
import about from "../assets/create-about.png";
import createEdit from "../assets/create-editT.png";
import frog from "../assets/frog.png";
import rat from "../assets/rat.png";
import cat from "../assets/cat.png";
import sheep from "../assets/sheep.png";
import deer from "../assets/deer.png";
import publicIcon from "../assets/public.png";
import publicIcon2 from "../assets/public-drop.png";

import { useState } from "react";

function CreateAccountPage() {
  const [step, setStep] = useState(0);
  const [counts, setCounts] = useState({
    baby: 1,
    toddler: 0,
    bigKid: 0,
    tween: 0,
    teen: 0,
  });
  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => prev + 1);

  const updateCount = (key, delta) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <form
          className="createAccountPage__form"
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <div className="createAccountPage__profile-top">
            <img
              className="createAccountPage__avatar"
              src={PFP}
              alt="Profile"
            />

            <div className="createAccountPage__profile-copy">
              <h2 className="createAccountPage__profile-title">
                Create your profile
              </h2>

              <div className="createAccountPage__username-row">
                <span>Username</span>
                <button
                  type="button"
                  className="createAccountPage__username-edit"
                >
                  <img
                    src={edit}
                    alt="Edit"
                    className="createAccountPage__username-edit-icon"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="createAccountPage__field-row">
            <div className="createAccountPage__field">
              <label htmlFor="create-Account-name">First Name</label>
              <input
                className="createAccountPage__input"
                id="create-Account-name"
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className="createAccountPage__field">
              <label htmlFor="create-Account-last-name">Last Name</label>
              <input
                className="createAccountPage__input"
                id="create-Account-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="createAccountPage__field createAccountPage__field--full">
            <label htmlFor="create-Account-address">Address</label>
            <input
              className="createAccountPage__input"
              id="create-Account-address"
              type="text"
              placeholder="Address"
            />
          </div>

          <div className="createAccountPage__field-row">
            <div className="createAccountPage__field">
              <label htmlFor="create-Account-country">Country</label>
              <select
                className="createAccountPage__input"
                id="create-Account-country"
              >
                <option value="" disabled>
                  Country
                </option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <div className="createAccountPage__field">
              <label htmlFor="create-Account-state">State</label>
              <select
                className="createAccountPage__input"
                id="create-Account-state"
              >
                <option value="" disabled>
                  State
                </option>
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
              </select>
            </div>
          </div>

          <div className="createAccountPage__field createAccountPage__field--full">
            <label htmlFor="create-Account-about">About</label>
            <textarea
              className="createAccountPage__textarea"
              id="create-Account-about"
              rows="4"
              placeholder="Just a dad with alot of kids!"
            />
          </div>

          <button type="submit" className="createAccountPage__submit-button">
            Continue
          </button>
        </form>
      );
    }

    if (step === 1) {
      return (
        <form
          className="createAccountPage__form"
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <h2 className="createAccountPage__section-header">
            About your family
          </h2>

          <div className="createAccountPage__public-row">
            <button type="button" className="createAccountPage__public-button">
              <img
                src={publicIcon}
                alt="Public"
                className="createAccountPage__public-icon"
              />
              Public
              <img
                src={publicIcon2}
                alt="Dropdown"
                className="createAccountPage__public-dropdown"
              />
            </button>
            <p className="createAccountPage__public-text">
              (Allow the public to view this section)
            </p>
          </div>

          <div className="createAccountPage__family-grid">
            <div className="createAccountPage__family-item">
              <button type="button" className="createAccountPage__family-card">
                <img
                  src={frog}
                  alt="Frog"
                  className="createAccountPage__family-icon"
                />
                <p className="createAccountPage__family-label">Baby</p>
                <p className="createAccountPage__family-label">
                  (0 - 12 months)
                </p>
              </button>
              <div className="createAccountPage__count-row">
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("baby", -1)}
                >
                  -
                </button>
                <span className="createAccountPage__count-value">
                  {counts.baby}
                </span>
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("baby", 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="createAccountPage__family-item">
              <button type="button" className="createAccountPage__family-card">
                <img
                  src={rat}
                  alt="Rat"
                  className="createAccountPage__family-icon"
                />
                <p className="createAccountPage__family-label">Toddler</p>
                <p className="createAccountPage__family-label">(1 - 3 years)</p>
              </button>
              <div className="createAccountPage__count-row">
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("toddler", -1)}
                >
                  -
                </button>
                <span className="createAccountPage__count-value">
                  {counts.toddler}
                </span>
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("toddler", 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="createAccountPage__family-item">
              <button type="button" className="createAccountPage__family-card">
                <img
                  src={cat}
                  alt="Cat"
                  className="createAccountPage__family-icon"
                />
                <p className="createAccountPage__family-label">Big Kid</p>
                <p className="createAccountPage__family-label">(4 - 7 years)</p>
              </button>
              <div className="createAccountPage__count-row">
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("bigKid", -1)}
                >
                  -
                </button>
                <span className="createAccountPage__count-value">
                  {counts.bigKid}
                </span>
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("bigKid", 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="createAccountPage__family-item">
              <button type="button" className="createAccountPage__family-card">
                <img
                  src={sheep}
                  alt="Sheep"
                  className="createAccountPage__family-icon"
                />
                <p className="createAccountPage__family-label">Tween</p>
                <p className="createAccountPage__family-label">
                  (8 - 12 years)
                </p>
              </button>
              <div className="createAccountPage__count-row">
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("tween", -1)}
                >
                  -
                </button>
                <span className="createAccountPage__count-value">
                  {counts.tween}
                </span>
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("tween", 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="createAccountPage__family-item">
              <button type="button" className="createAccountPage__family-card">
                <img
                  src={deer}
                  alt="Deer"
                  className="createAccountPage__family-icon"
                />
                <p className="createAccountPage__family-label">Teen</p>
                <p className="createAccountPage__family-label">
                  (13 - 17 years)
                </p>
              </button>
              <div className="createAccountPage__count-row">
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("teen", -1)}
                >
                  -
                </button>
                <span className="createAccountPage__count-value">
                  {counts.teen}
                </span>
                <button
                  type="button"
                  className="createAccountPage__count-button"
                  onClick={() => updateCount("teen", 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="createAccountPage__button-row">
            <button type="submit" className="createAccountPage__skip-button">
              Skip for now
            </button>
            <button type="submit" className="createAccountPage__submit-button">
              Continue
            </button>
          </div>
        </form>
      );
    }

    if (step === 2) {
      return (
        <form
          className="createAccountPage__form"
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <h2 className="createAccountPage__section-header">
            About your needs
          </h2>
          <div className="createAccountPage__need-list">
            <label>
              <input type="checkbox" /> Health
            </label>
            <label>
              <input type="checkbox" /> School
            </label>
            <label>
              <input type="checkbox" /> Meal prep
            </label>
            <label>
              <input type="checkbox" /> Activities
            </label>
          </div>
          <div className="createAccountPage__button-row">
            <button type="submit" className="createAccountPage__skip-button">
              Skip for now
            </button>
            <button type="submit" className="createAccountPage__submit-button">
              Continue
            </button>
          </div>
        </form>
      );
    }

    return (
      <div className="createAccountPage__finish">
        <h2 className="createAccountPage__section-header">Finish</h2>
        <p>Your profile is ready.</p>
      </div>
    );
  };

  return (
    <main className="createAccountPage">
      <button
        onClick={() => navigate("/")}
        type="button"
        className="createAccountPage__top-back"
      >
        <img
          src={createBack}
          alt="Back"
          className="createAccountPage__top-back-icon"
        />
      </button>
      <img className="createAccountPage__hero" src={createPic} alt="Hero" />
      <button type="button" className="createAccountPage__edit-button">
        <img
          src={createEdit}
          alt="Edit"
          className="createAccountPage__edit-icon"
        />
      </button>
      <div className="createAccountPage__content">
        <aside className="createAccountPage__sidebar">
          <button type="button" className="createAccountPage__back-button">
            <img
              src={authBack}
              alt="Back"
              className="createAccountPage__back-icon"
            />
            <span className="createAccountPage__back-button-text">
              Edit Tab
            </span>
          </button>

          <div className="createAccountPage__nav">
            <button
              type="button"
              className={
                step === 0
                  ? "createAccountPage__create-profile-button"
                  : "createAccountPage__nav-item"
              }
              onClick={() => setStep(0)}
            >
              <span>
                <img
                  src={icon}
                  alt="Back"
                  className="createAccountPage__back-icon"
                />
              </span>
              Create your profile
            </button>
            <button
              type="button"
              className={
                step === 1
                  ? "createAccountPage__create-profile-button"
                  : "createAccountPage__nav-item"
              }
              onClick={() => setStep(1)}
            >
              <span>
                <img
                  src={bear}
                  alt="Back"
                  className="createAccountPage__back-icon"
                />
              </span>
              About your family
            </button>
            <button
              type="button"
              className={
                step === 2
                  ? "createAccountPage__create-profile-button"
                  : "createAccountPage__nav-item"
              }
              onClick={() => setStep(2)}
            >
              <span>
                <img
                  src={about}
                  alt="Back"
                  className="createAccountPage__back-icon"
                />
              </span>
              About your needs
            </button>
            <button
              type="button"
              className={
                step === 3
                  ? "createAccountPage__create-profile-button"
                  : "createAccountPage__nav-item"
              }
              onClick={() => setStep(3)}
            >
              <span>
                <img
                  src={finish}
                  alt="Back"
                  className="createAccountPage__back-icon"
                />
              </span>
              Finish
            </button>
          </div>
        </aside>

        <section className="createAccountPage__card">{renderStep()}</section>
      </div>
    </main>
  );
}

export default CreateAccountPage;
