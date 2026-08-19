import "../blocks/CreateProfileStep.css";
import PFP from "../assets/pfp.png";
import edit from "../assets/icons.png";

function CreateProfileStep({ nextStep }) {
  return (
    <form
      className="createAccountPage__form"
      onSubmit={(event) => {
        event.preventDefault();
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
            <option value="" disabled>Country</option>
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
            <option value="" disabled>State</option>
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

export default CreateProfileStep;
