import "../blocks/NeedsStep.css";
import publicIcon from "../assets/public.png";
import publicIcon2 from "../assets/public-drop.png";
import { useState } from "react";
import health from "../assets/healthy.png";
import chair from "../assets/high-chairs.png";
import wheelchair from "../assets/wheelchair.png";
import check from "../assets/check.png";

const needSections = [
  {
    title: "Family Needs",
    icon: chair,
    color: "green",
    options: [
      "Baby Friendly",
      "Kids Menu",
      "High Chairs",
      "Changing Tables",
      "Play Areas",
      "Kids Menu",
      "Kids Menu",
      "Kids Menu",
      "Kids Menu",
      "Kids Menu",
    ],
  },
  {
    title: "Accessibility",
    icon: wheelchair,
    color: "blue",
    options: [
      "Wheelchair Accessible",
      "Wheelchair Accessible",
      "Wheelchair Accessible",
      "Wheelchair Accessible",
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
    icon: health,
    color: "pink",
    options: [
      "Gluten Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
      "Dairy Free",
    ],
  },
];

function NeedsStep({ nextStep }) {
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

  const toggleNeed = (needId) => {
    setSelectedNeeds((previousNeeds) => ({
      ...previousNeeds,
      [needId]: !previousNeeds[needId],
    }));
  };

  return (
    <form
      className="createAccountPage__form"
      onSubmit={(event) => {
        event.preventDefault();
        nextStep();
      }}
    >
      <h2 className="createAccountPage__section-header">About your needs</h2>
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

      <p className="createAccountPage__needs-instruction">
        (Select all that apply)
      </p>

      <div className="createAccountPage__needs-sections">
        {needSections.map((section) => (
          <section
            className="createAccountPage__needs-section"
            key={section.title}
          >
            <h3 className="createAccountPage__needs-title">
              {section.title} -{" "}
              {
                section.options.filter(
                  (_, index) => selectedNeeds[`${section.title}-${index}`],
                ).length
              }
            </h3>
            <div className="createAccountPage__needs-grid">
              {section.options.map((option, index) => {
                const needId = `${section.title}-${index}`;
                const isSelected = selectedNeeds[needId];

                return (
                  <button
                    type="button"
                    key={needId}
                    className={`createAccountPage__need-button createAccountPage__need-button--${section.color}${isSelected ? " createAccountPage__need-button--selected" : ""}`}
                    onClick={() => toggleNeed(needId)}
                  >
                    <span className="createAccountPage__need-icon">
                      <img src={section.icon} alt="" />
                    </span>
                    <span className="createAccountPage__need-label">
                      {option}
                    </span>
                    {isSelected && (
                      <span className="createAccountPage__need-check">
                        <img src={check} alt="Selected" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
        <button type="button" className="createAccountPage__needs-expand">
          ⌄
        </button>
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

export default NeedsStep;
