import React from 'react';
//import './corevalues.css';
import './Corevalues.css';


const values = [
  {
    icon: '/assets/compassion.png',
    title: 'Compassion',
    description: 'We work with empathy and kindness to meet the immediate and long-term needs of our neighbors.',
  },
  {
    icon: '/assets/integrity.png',
    title: 'Integrity',
    description: 'We are committed to transparency, accountability, and ethical practices in everything we do.',
  },
  {
    icon: '/assets/sustainability.png',
    title: 'Sustainability',
    description: 'We focus on reducing food waste and finding sustainable solutions to hunger.',
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="cv-header">
        <h2>Our core values</h2>
        <p>
          Torquem detraxit hosti et quidem se ipsam causam non fuisse torquem detraxit hosti et quidem
          se texit, ne ad respondendum reddidisti voluptates omittantur maiorum dolorum fuga.
        </p>
      </div>
      <div className="cv-cards">
        {values.map((value, index) => (
          <div className="cv-card" key={index}>
            <img src={value.icon} alt={value.title} className="cv-icon" />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
