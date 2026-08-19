import "../blocks/FinishStep.css";
import { useNavigate } from "react-router-dom";
import finishImage from "../assets/finish.png";

function FinishStep() {
  const navigate = useNavigate();

  return (
    <div className="createAccountPage__finish">
      <h2 className="createAccountPage__section-header">
        Account Created Successfully!
      </h2>
      <div className="createAccountPage__finish-content">
        <img
          className="createAccountPage__finish-image"
          src={finishImage}
          alt="Account created"
        />
        <div className="createAccountPage__finish-actions">
          <button
            type="button"
            className="createAccountPage__finish-primary"
            onClick={() => navigate("/")}
          >
            Start discovering restaurants now
          </button>
          <button
            type="button"
            className="createAccountPage__finish-secondary"
            onClick={() => navigate("/loggedin")}
          >
            Go to profile page
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinishStep;
