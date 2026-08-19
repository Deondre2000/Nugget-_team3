import "../blocks/Auth.css";

function AuthForm({ authMode, currentAuth, handleAuthSubmit }) {
  return (
    <div className="auth__content">
      {authMode === "signin" ? (
        <form className="auth__form" onSubmit={handleAuthSubmit}>
          <label className="auth__form-label" htmlFor="signin-email">
            Email
          </label>
          <input
            className="auth__form-input"
            id="signin-email"
            type="email"
            placeholder="Enter your email"
          />

          <label className="auth__form-label" htmlFor="signin-password">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit" className="auth__submit">
            {currentAuth.buttonText}
          </button>
        </form>
      ) : (
        <form className="auth__form" onSubmit={handleAuthSubmit}>
          <label className="auth__form-label" htmlFor="signup-email">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
          />

          <label className="auth__form-label" htmlFor="signup-password">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
          />

          <label className="auth__form-label" htmlFor="signup-confirm-password">
            Confirm Password
          </label>
          <input
            id="signup-confirm-password"
            type="password"
            placeholder="Confirm your password"
          />

          <button type="submit" className="auth__submit">
            {currentAuth.buttonText}
          </button>
        </form>
      )}
    </div>
  );
}

export default AuthForm;
