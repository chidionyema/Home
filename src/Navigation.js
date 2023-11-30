// src/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
function Navigation() {
  return (

     <nav className="nav-container">
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
