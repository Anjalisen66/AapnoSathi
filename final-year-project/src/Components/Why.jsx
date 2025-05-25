import React, { useState } from "react";
import { FiShield } from "react-icons/fi"; 
import { MdSchool } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbMessageChatbotFilled } from "react-icons/tb";

import "./why.css";

const Why = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which box is hovered

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const boxes = [
    { id: 1, icon: <MdSchool size={42} color="#edeecb" />,title: "Tailored for Students", description: "Our platform is designed specifically for students, addressing their unique needs, budgets, and preferences for accommodation, transportation, and local services." },
    { id: 2,icon: <RiUserCommunityFill size={42} color="#edeecb" />, title: "Community-Driven Support", description: "Access peer reviews, ratings, and an active student community for trusted advice and tips." },
    { id: 3,icon: <IoShieldCheckmark size={42} color="#edeecb" />, title: "Verified and Reliable", description: "Every listing and service is carefully verified to ensure quality and safety, so you can trust the resources you find." },
    { id: 4,icon: <TbMessageChatbotFilled size={42} color="#edeecb" />, title: "Real-Time Assistance", description: "From live transit tracking to our AI chatbot, we’re here to provide instant support whenever you need it." },
  ];

  return (
    <div className="why-section">
      <h2>Why Choose Us?</h2>
      <div className="row">
        {boxes.map((box, index) => (
          <div
            className="super-box"
            key={box.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container">
              <div className="box">
                <div className="icon_bg"></div>
                {hoveredIndex === index && (
                  <div className="after-content">
                    {box.description}
                  </div>
                )}
              </div>
              <div className="icon">
              {box.icon}
              </div>
            </div>
            <div className="text">
              <p className="title">{box.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
