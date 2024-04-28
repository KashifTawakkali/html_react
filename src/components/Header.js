import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><Link to="/">Bright-Touch</Link></h1>

        <nav className="navbar">
          <div className="mobile-nav-toggle" onClick={toggleMenu}>
            <i className={`bi bi-list ${isOpen ? 'bi-x' : ''}`}></i>
          </div>
          <ul className={isOpen ? 'navbar-mobile active' : 'navbar-mobile'}>
            <li><Link className="nav-link scrollto" to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link className="nav-link scrollto" to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link className="nav-link scrollto" to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link className="nav-link scrollto" to="/portfolio" onClick={toggleMenu}>Technologies</Link></li>
            <li><Link className="nav-link scrollto" to="/team" onClick={toggleMenu}>Team</Link></li>
            <li><Link className="nav-link scrollto" to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link className="getstarted scrollto" to="/about" onClick={toggleMenu}>Get Started</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
