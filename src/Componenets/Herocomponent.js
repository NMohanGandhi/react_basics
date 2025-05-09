// src/components/HeroSection.jsx
import React from 'react';
import './Herocomponent.css';
import Fightagaiist from '../assets/Fightagaiist.png'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Fight Against <br/> Hunger Donating <br/>
            <span className="highlight">Food Today</span>
          </h1>
          <p>
            Your donation can help provide food to people who are struggling to
            feed themselves and their families
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Donate Now</button>
            <button className="btn-secondary">Register as Volunteer</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={Fightagaiist} alt="Child Eating" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
