import "../blocks/CreateAccount.css";
import createPic from "../assets/createPic.png";
import createBack from "../assets/createBack.png";
import PFP from "../assets/pfp.png";
import edit from "../assets/icons.png";
import authBack from "../assets/auth-back.png";
import icon from "../assets/create-icon.png";
import bear from "../assets/create-bear.png";
import finish from "../assets/create-finish.png";
import about from "../assets/create-about.png";

function CreateAccountPage() {
  return (
    <main className="createAccountPage">
      <button type="button" className="createAccountPage__top-back">
        <img
          src={createBack}
          alt="Back"
          className="createAccountPage__top-back-icon"
        />
      </button>

      <img className="createAccountPage__hero" src={createPic} alt="Hero" />

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
              className="createAccountPage__create-profile-button"
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
            <button type="button" className="createAccountPage__nav-item">
              <span>
                <img
                  src={bear}
                  alt="Back"
                  className="createAccountPage__back-icon"
                />
              </span>
              About your family
            </button>
            <button type="button" className="createAccountPage__nav-item">
              <span>
                <img
                  src={about}
                  alt="Back"
                  className="createAccountPage__back-icon"
                />
              </span>
               About your needs
            </button>
            <button type="button" className="createAccountPage__nav-item">
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

        <section className="createAccountPage__card">
          <div className="createAccountPage__profile-top">
            <img
              className="createAccountPage__avatar"
              src={PFP}
              alt="Profile"
            />
            <h2>Create your profile</h2>
          </div>

          <div className="createAccountPage__username-row">
            <span>Username</span>
            <button type="button" className="createAccountPage__username-edit">
              <img
                src={edit}
                alt="Edit"
                className="createAccountPage__username-edit-icon"
              />
            </button>
          </div>

          <form className="createAccountPage__form">
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
              continue
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default CreateAccountPage;
