import { Link, useNavigate } from "react-router-dom";
import "../blocks/Auth.css";
import AuthForm from "./AuthForm.jsx";
import cover from "../assets/Login-cover.png";
import google from "../assets/google.png";
import Login from "../assets/Login-img.png";
import back from "../assets/auth-back.png";

const authCopy = {
  signin: {
    title: "Sign In",
    subtitle: "Start discovering family-friendly restaurants today.",
    buttonText: "Sign In",
    switchLead: "Don't have an account?",
    switchAction: "Sign up",
    switchPath: "/signup",
  },
  signup: {
    title: "Create your account",
    subtitle: "Start discovering family-friendly restaurants today.",
    buttonText: "Create Account",
    switchLead: "Already have an account?",
    switchAction: "Sign in",
    switchPath: "/signin",
  },
};

function AuthPage({ authMode }) {
  const navigate = useNavigate();
  const currentAuth = authCopy[authMode];

  function handleAuthSubmit(event) {
    event.preventDefault();

    if (authMode === "signin") {
      navigate("/loggedin");
    } else {
      navigate("/create-profile");
    }
  }

  return (
    <main className="auth-page">
      <img src={Login} alt="Login" className="auth-page__image" />
      <section className="auth-page__card">
        <Link to="/" className="auth-page__back">
          <img src={back} alt="Back" className="auth__back" />
        </Link>
        <img className="auth__cover" src={cover} alt="Nugget" />

        <div className="auth__header">
          <h1 className="auth__title">{currentAuth.title}</h1>
          <p className="auth__subtitle">{currentAuth.subtitle}</p>
        </div>

        <button type="button" className="auth__google">
          <img className="auth__google-icon" src={google} alt="Google" />
          <span className="auth__google-text">Sign in with Google</span>
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
          <Link className="auth__switch" to={currentAuth.switchPath}>
            {currentAuth.switchAction}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default AuthPage;
