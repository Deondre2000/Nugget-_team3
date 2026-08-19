import "../blocks/CreateAccountPage.css";
import "../blocks/CreateAccountShared.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createPic from "../assets/createPic.png";
import createBack from "../assets/createBack.png";
import authBack from "../assets/auth-back.png";
import icon from "../assets/create-icon.png";
import bear from "../assets/create-bear.png";
import finish from "../assets/create-finish.png";
import about from "../assets/create-about.png";
import createEdit from "../assets/create-editT.png";
import CreateProfileStep from "./CreateProfileStep";
import AboutFamilyStep from "./AboutFamilyStep";
import NeedsStep from "./NeedsStep";
import FinishStep from "./FinishStep";

const tabs = [
  ["Create your profile", icon],
  ["About your family", bear],
  ["About your needs", about],
  ["Finish", finish],
];

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

  const nextStep = () => setStep((previousStep) => Math.min(previousStep + 1, 3));

  const updateCount = (key, delta) => {
    setCounts((previousCounts) => ({
      ...previousCounts,
      [key]: Math.max(0, previousCounts[key] + delta),
    }));
  };

  const renderStep = () => {
    if (step === 0) return <CreateProfileStep nextStep={nextStep} />;
    if (step === 1) {
      return (
        <AboutFamilyStep
          counts={counts}
          updateCount={updateCount}
          nextStep={nextStep}
        />
      );
    }
    if (step === 2) return <NeedsStep nextStep={nextStep} />;
    return <FinishStep />;
  };

  return (
    <main className="createAccountPage">
      <button
        onClick={() => navigate("/")}
        type="button"
        className="createAccountPage__top-back"
      >
        <img src={createBack} alt="Back" className="createAccountPage__top-back-icon" />
      </button>
      <img className="createAccountPage__hero" src={createPic} alt="Hero" />
      <button type="button" className="createAccountPage__edit-button">
        <img src={createEdit} alt="Edit" className="createAccountPage__edit-icon" />
      </button>

      <div className="createAccountPage__content">
        <aside className="createAccountPage__sidebar">
          <button type="button" className="createAccountPage__back-button">
            <img src={authBack} alt="Back" className="createAccountPage__back-icon" />
            <span className="createAccountPage__back-button-text">Edit Tab</span>
          </button>

          <div className="createAccountPage__nav">
            {tabs.map(([label, image], index) => (
              <button
                type="button"
                key={label}
                className={
                  step === index
                    ? "createAccountPage__create-profile-button"
                    : "createAccountPage__nav-item"
                }
                onClick={() => setStep(index)}
              >
                <span>
                  <img src={image} alt="" className="createAccountPage__back-icon" />
                </span>
                {label}
              </button>
            ))}
          </div>
        </aside>

        <section className="createAccountPage__card">{renderStep()}</section>
      </div>
    </main>
  );
}

export default CreateAccountPage;
