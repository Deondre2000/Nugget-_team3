import "../blocks/AboutFamilyStep.css";
import frog from "../assets/frog.png";
import rat from "../assets/rat.png";
import cat from "../assets/cat.png";
import sheep from "../assets/sheep.png";
import deer from "../assets/deer.png";
import PublicToggle from "./PublicToggle";

const familyMembers = [
  ["baby", "Baby", "(0 - 12 months)", frog, "Frog"],
  ["toddler", "Toddler", "(1 - 3 years)", rat, "Rat"],
  ["bigKid", "Big Kid", "(4 - 7 years)", cat, "Cat"],
  ["tween", "Tween", "(8 - 12 years)", sheep, "Sheep"],
  ["teen", "Teen", "(13 - 17 years)", deer, "Deer"],
];

function AboutFamilyStep({ counts, updateCount, nextStep }) {
  return (
    <form
      className="createAccountPage__form"
      onSubmit={(event) => {
        event.preventDefault();
        nextStep();
      }}
    >
      <h2 className="createAccountPage__section-header">About your family</h2>

      <div className="createAccountPage__public-row">
        <PublicToggle />
        <p className="createAccountPage__public-text">
          (Allow the public to view this section)
        </p>
      </div>

      <div className="createAccountPage__family-grid">
        {familyMembers.map(([key, name, ageRange, image, alt]) => (
          <div className="createAccountPage__family-item" key={key}>
            <button type="button" className="createAccountPage__family-card">
              <img src={image} alt={alt} className="createAccountPage__family-icon" />
              <p className="createAccountPage__family-label">{name}</p>
              <p className="createAccountPage__family-label">{ageRange}</p>
            </button>
            <div className="createAccountPage__count-row">
              <button
                type="button"
                className="createAccountPage__count-button"
                onClick={() => updateCount(key, -1)}
              >
                -
              </button>
              <span className="createAccountPage__count-value">{counts[key]}</span>
              <button
                type="button"
                className="createAccountPage__count-button"
                onClick={() => updateCount(key, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="createAccountPage__button-row">
        <button type="submit" className="createAccountPage__skip-button">Skip for now</button>
        <button type="submit" className="createAccountPage__submit-button">Continue</button>
      </div>
    </form>
  );
}

export default AboutFamilyStep;
