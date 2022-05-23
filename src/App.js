import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PreMotorla from "./pages/premotorola";
import PostMotorla from "./pages/postmotorola";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav>
        <h1> Customer Visit</h1>
        <div className="creator">
          <a
            className="creator__info"
            href="https://github.com/juseok-cha"
            target="none"
          >
            @github
          </a>
          <a
            className="creator__info"
            href="https://www.instagram.com/juseok24/"
            target="none"
          >
            Instagram
          </a>
        </div>
        <div className="prepost">
          <Link to="/premotorola"> Pre </Link>
          <Link to="/postmotorola"> Post </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premotorola" element={<PreMotorla />} />
        <Route path="/postmotorola" element={<PostMotorla />} />
      </Routes>
    </Router>
  );
}

export default App;
