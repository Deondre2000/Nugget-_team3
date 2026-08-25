import "../blocks/NeedsStep.css";
import { useState } from "react";
import health from "../assets/healthy.png";
import chair from "../assets/high-chairs.png";
import wheelchair from "../assets/wheelchair.png";
import check from "../assets/check.png";
import PublicToggle from "./PublicToggle";

const needSections = [
  {
    title: "Family Needs",
    icon: chair,
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
    icon: health,
    color: "pink",
    options: [
      "Gluten Free",
      "Dairy Free",
      "Healthy Options",
      "Vegan Options",
      "Vegetarian Options",
    ],
  },
];

function NeedsStep({ nextStep }) {
  const [selectedNeeds, setSelectedNeeds] = useState({});

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
        <PublicToggle />
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
            <h3 className="createAccountPage__needs-title">{section.title}</h3>
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
