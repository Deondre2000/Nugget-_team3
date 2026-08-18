import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "../blocks/App.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import AuthPage from "./AuthPage.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<AuthPage authMode="signin" />} />
        <Route path="/signup" element={<AuthPage authMode="signup" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
