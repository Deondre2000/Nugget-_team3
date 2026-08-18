import { useState } from "react";
import "../blocks/App.css";
import "../blocks/auth.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import AuthForm from "./AuthForm.jsx";
import cover from "../assets/Login-cover.png";
import backButton from "../assets/back-button.png";
import google from "../assets/google.png";

function App() {
  const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const authCopy = {
    signin: {
      title: "Sign In",
      subtitle: "Start discovering family-friendly restaurants today.",
      buttonText: "Sign In",
      switchLead: "Don't have an account?",
      switchAction: "Sign up",
    },
    signup: {
      title: "Create your account",
      subtitle: "Start discovering family-friendly restaurants today.",
      buttonText: "Create Account",
      switchLead: "Already have an account?",
      switchAction: "Sign in",
    },
  };

  const currentAuth = authCopy[authMode];

  function openSignInPanel() {
    setAuthMode("signin");
    setIsAuthPanelOpen(true);
  }

  function openSignUpPanel() {
    setAuthMode("signup");
    setIsAuthPanelOpen(true);
  }

  function closeAuthPanel() {
    setIsAuthPanelOpen(false);
  }

  function handleAuthSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Nav
        openSignUpPanel={openSignUpPanel}
        openSignInPanel={openSignInPanel}
      />
      <Home />
      <Footer />

      <div
        className={isAuthPanelOpen ? "auth__overlay is-open" : "auth__overlay"}
        onClick={closeAuthPanel}
      />

      <aside
        className={isAuthPanelOpen ? "auth__panel is-open" : "auth__panel"}
      >
        <button type="button" className="auth__close" onClick={closeAuthPanel}>
          <img className="auth__close-icon" src={backButton} alt="Close" />
        </button>

        <img className="auth__cover" src={cover} alt="Nugget Cover" />

        <div className="auth__header">
          <h2 className="auth__title">{currentAuth.title}</h2>
          <p className="auth__subtitle">{currentAuth.subtitle}</p>
        </div>

        <button type="button" className="auth__google">
          <img className="auth__google-icon" src={google} alt="Google" />
          <p className="auth__google-text">Sign in with Google</p>
        </button>

        <div className="auth__divider">
          <span>OR</span>
        </div>

        <AuthForm
          authMode={authMode}
          currentAuth={currentAuth}
          handleAuthSubmit={handleAuthSubmit}
        />

        <p className="auth__switch-row">
          {currentAuth.switchLead}
          <button
            type="button"
            className="auth__switch"
            onClick={() =>
              setAuthMode(authMode === "signin" ? "signup" : "signin")
            }
          >
            {currentAuth.switchAction}
          </button>
        </p>
      </aside>
    </>
  );
}

export default App;
