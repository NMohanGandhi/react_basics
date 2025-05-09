import React from 'react';
import './visionmission.css';
import OurVision from '../assets/OurVision.png'
import OurMission from '../assets/OurMission.png'

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      {/* Vision Section */}
      <div className="vision-mission-block">
        <div className="vm-text">
          <h2>Our Vision</h2>
          <p>
            A hunger-free world where every individual has access to the food they need to thrive.
            We envision a world where food insecurity is a thing of the past, and where communities
            work together to support and care for one another.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
        <div className="vm-image-container">
          <div className="image-bg">
            <img src={OurVision} alt="Our Vision" />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="vision-mission-block reverse">
        <div className="vm-image-container">
          <div className="image-bg">
            <img src={OurMission} alt="Our Mission" />
          </div>
        </div>
        <div className="vm-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide nutritious, non-perishable food to individuals and families
            in need. We strive to reduce food waste, promote sustainability, and support long-term
            solutions to hunger, ensuring that everyone can lead healthy, productive lives.
          </p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
