import { useState } from "react";
import "../blocks/App.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import cover from "../assets/login-cover.png";

function App() {
  const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const authCopy = {
    signin: {
      title: "Welcome back",
      subtitle: "Welcome back! Please enter your details.",
      buttonText: "Sign In",
      switchLead: "New to Nugget?",
      switchAction: "Create an account",
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
        className={isAuthPanelOpen ? "auth-overlay is-open" : "auth-overlay"}
        onClick={closeAuthPanel}
      />

      <aside className={isAuthPanelOpen ? "auth-panel is-open" : "auth-panel"}>
        <button type="button" className="auth-close" onClick={closeAuthPanel}>
          X
        </button>

        <img className="auth-cover" src={cover} alt="Nugget Cover" />

        <div className="auth-header">
          <h2 className="auth-title">{currentAuth.title}</h2>
          <p className="auth-subtitle">{currentAuth.subtitle}</p>
        </div>

        <div className="auth-content">
          {authMode === "signin" ? (
            <form className="auth-form" onSubmit={handleAuthSubmit}>
              <label htmlFor="signin-email">Email</label>
              <input
                id="signin-email"
                type="email"
                placeholder="Enter your email"
              />

              <label htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                type="password"
                placeholder="Enter your password"
              />

              <button type="submit" className="auth-submit">
                {currentAuth.buttonText}
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleAuthSubmit}>
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="Enter your email"
              />

              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                type="password"
                placeholder="Create a password"
              />
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                id="signup-confirm-password"
                type="password"
                placeholder="Confirm your password"
              />

              <button type="submit" className="auth-submit">
                {currentAuth.buttonText}
              </button>
            </form>
          )}
        </div>
        <p className="auth-switch-row">
          {currentAuth.switchLead}
          <button
            type="button"
            className="auth-switch"
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
