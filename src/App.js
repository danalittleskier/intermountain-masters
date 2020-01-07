import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Schedule from "./components/pages/Schedule";
import Results from "./components/pages/Results";
import Standings from "./components/pages/Standings";
import Contact from "./components/pages/Contact";
import LandingHero from "./components/HeroPic/LandingHero";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <LandingHero />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/standings" component={Standings} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
