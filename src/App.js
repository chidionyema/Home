import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Services from './Services';
import Contact from './Contact';
import Donation from './Donation'; // Import the Donation component

function App() {
  return (
    <div className="App">
      <div className="App-logo-container">
        <img src={logo} className="App-logo" alt="LuciferAeo logo" />
      </div>
      <div className="nav-container">
        <Router>
          <Navigation className="nav-list" />
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donation />} /> {/* New route for the donation page */}
          </Routes>
        </Router>
      </div>
      <header className="App-header">
        <h1>Welcome to LuciferAeo</h1>
        <h2>Bringing Limitless Light</h2>
        <h3>We Power Dreams</h3>
        <p>
          At LuciferAeo, we merge advanced machine learning with deep psychological insights to create innovative AI solutions.
        </p>
        <p>
          Explore our unique approach to harnessing the power of AI in understanding and responding to human behavior.
        </p>
        <a
          className="App-link"
          href="https://luciferaeo.com/services"
          target="_blank"
          rel="noopener noreferrer">
          Learn More About Our Services
        </a>
        <p>Contact us: +1 234 567 8900</p> {/* Contact number */}
        <div className="social-media-links">
          <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>
      
      <footer>
        <Link to="/donate" className="App-link">Make a Donation</Link> {/* Link to the donation page */}
      </footer>
    </div>
  );
}

export default App;
