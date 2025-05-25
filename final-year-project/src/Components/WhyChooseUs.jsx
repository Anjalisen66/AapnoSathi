import React from 'react';
import './WhyChooseUs.css';
import studentIcon from '../assets/student-icon.png'; // Replace with actual paths to your icons
import communityIcon from '../assets/community-icon.png';
import verifiedIcon from '../assets/verified-icon.png';
import aiIcon from '../assets/ai-icon.png';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container">
      <h2 className="why-choose-title">Why Choose Us?</h2>
      <div className="features-grid">
        {/* Box 1 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={studentIcon} alt="Tailored for Students" />
            <p>Tailored for Students</p>
          </div>
          <div className="feature-description">
            <p>
              Our platform is designed specifically for students, addressing their unique needs, budgets, and preferences for accommodation, transportation, and local services.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={communityIcon} alt="Community-Driven Support" />
            <p>Community-Driven Support</p>
          </div>
          <div className="feature-description">
            <p>
              Access peer reviews, ratings, and an active student community for trusted advice and tips.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={verifiedIcon} alt="Verified and Reliable" />
            <p>Verified and Reliable</p>
          </div>
          <div className="feature-description">
            <p>
              Every listing and service is carefully verified to ensure quality and safety, so you can trust the resources you find.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="feature-item">
          <div className="feature-icon">
            <img src={aiIcon} alt="Real-Time Assistance" />
            <p>Real-Time Assistance</p>
          </div>
          <div className="feature-description">
            <p>
              From live transit tracking to our AI chatbot, we’re here to provide instant support whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
