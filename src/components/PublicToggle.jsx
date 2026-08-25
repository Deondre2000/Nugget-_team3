import { useState } from "react";
import publicIcon from "../assets/public.png";
import publicIcon2 from "../assets/public-drop.png";

function PublicToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState("Public");

  return (
    <div className="createAccountPage__public-toggle">
      <button
        type="button"
        className="createAccountPage__public-button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <img
          src={publicIcon}
          alt="Public"
          className="createAccountPage__public-icon"
        />
        {visibility}
        <img
          src={publicIcon2}
          alt="Dropdown"
          className="createAccountPage__public-dropdown"
        />
      </button>
      {isOpen && (
        <div className="createAccountPage__public-menu">
          <button
            type="button"
            className={
              visibility === "Public"
                ? "createAccountPage__public-menu-item createAccountPage__public-menu-item--active"
                : "createAccountPage__public-menu-item"
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
                ? "createAccountPage__public-menu-item createAccountPage__public-menu-item--active"
                : "createAccountPage__public-menu-item"
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

export default PublicToggle;
