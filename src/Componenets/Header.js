// src/components/Header.jsx
import React from 'react';
import './Header.css';
import companylogo from '../assets/companylogo.png';
import Cart from '../assets/Cart.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-nav">
          <div className="logo">
            <img src={companylogo} alt="Goodgive Logo" />
          </div>
          <nav className="nav-menu">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">What We Do</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-actions">
          <img src={Cart} alt="Cart" className="cart-icon" />
          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
