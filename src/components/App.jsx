import { useState } from "react";
import "../blocks/App.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

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

        <div className="auth-tabs">
          <button
            type="button"
            className={
              authMode === "signin" ? "auth-tab is-active" : "auth-tab"
            }
            onClick={() => setAuthMode("signin")}
          >
            Sign In
          </button>

          <button
            type="button"
            className={
              authMode === "signup" ? "auth-tab is-active" : "auth-tab"
            }
            onClick={() => setAuthMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-content">
          {authMode === "signin" ? (
            <form className="auth-form">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
              <button type="submit" className="auth-submit">
                Sign In
              </button>
            </form>
          ) : (
            <form className="auth-form">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" />
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
              <label>Password</label>
              <input type="password" placeholder="Create password" />
              <button type="submit" className="auth-submit">
                Create Account
              </button>
            </form>
          )}
        </div>
      </aside>
    </>
  );
}

export default App;
