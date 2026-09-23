import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Animals from "./pages/Animals";
import AnimalDetails from "./pages/AnimalDetails";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";
import Contact from "./pages/Contact";
import Adopt from "./pages/Adopt";
import Donate from "./pages/Donate";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <header className="site-header">
          <nav className="navbar">
            <Link to="/" className="logo">
              <span className="logo-paw">🐾</span>
              <span>Avipaw Rescue</span>
            </Link>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/work">Our Work</Link>
              <Link to="/animals">Animals</Link>
              <Link to="/stories">Stories</Link>

              <Link to="/adopt">Adopt</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />

            <Route path="/animals" element={<Animals />} />
            <Route path="/animals/:id" element={<AnimalDetails />} />

            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<StoryDetails />} />

            <Route path="/adopt" element={<Adopt />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="footer-content">
            <div>
              <h3>🐾 Avipaw Rescue</h3>
              <p>Rescue. Recover. Rebuild.</p>
            </div>

            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/animals">Animals</Link>
              <Link to="/stories">Stories</Link>
              <Link to="/adopt">Adopt</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 Avipaw Rescue. Every paw deserves a second chance.
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;