import React from "react";
import "./AboutUs.css";
import aboutImage from "../assets/about-us.png";
import storyBackground from "../assets/52a4551243da81dc44725106b5666d9f.jpg";
import studentIcon from "../assets/student.png";
import communityIcon from "../assets/community.png";
import verifiedIcon from "../assets/verified.png";
import aiIcon from "../assets/ai.png";
import Why from "./Why";

const AboutUs = () => {
  return (
    <section>
      {/* Background Section */}
      <div
        className="relative  mt-[-20px] h-[50vh] lg:h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-[#edeecb] text-4xl lg:text-6xl font-bold  px-6 py-2 rounded-md">
          About Us
        </h1>
      </div>

      {/* Mission Section */}
      <div className="bg-[#edeecb] py-10 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto bg-[#623e28] text-[#edeecb] p-8 shadow-lg mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb- 6">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl text-center leading-relaxed">
            "Empowering students to navigate the city with ease by providing
            tailored resources, accessible information, and a supportive
            community that simplifies urban living and fosters a seamless
            transition into their new environment."
          </p>
        </div>

        {/* Our Story Section */}
        <div
          className="about-us-container"
          style={{
            backgroundImage: `url(${storyBackground})`,
            filter: `blur(0px)`,
          }}
        >
          <h1 className="about-us-title">
            Our <span>STORY</span>
          </h1>
          <div className="about-us-content">
            <p>
              The idea for this platform was born from a shared
              experience—navigating the challenges of adjusting to a new city as
              students. Our team, hailing from different backgrounds, vividly
              remembers the overwhelming process of finding a place to stay,
              figuring out the city's transportation system, and locating
              reliable local services.
            </p>
            <p>
              While some of us spent weeks hunting for affordable accommodations
              that were both safe and close to our campuses, others struggled
              with long commutes, missed buses, or confusing transit systems.
              Add to that the frustration of finding essential services like
              affordable eateries, laundry, and repair shops, and it became
              clear: students need a better solution.
            </p>
            <p>
              We realized that while cities offer endless opportunities, they
              often lack centralized resources tailored to students' needs. This
              gap inspired us to create a platform that simplifies the
              transition for students moving to a new city.
            </p>
          </div>
        </div>
      </div>

      <Why />

      <div className="team-container">
        <h2 className="team-title">Our Team</h2>
        <p className="team-description">
          "Meet our dedicated team of innovators! Anjali drives database and
          UI/UX design, Bhumika excels in frontend development and data
          gathering, and Juhi powers our project with machine learning
          expertise. Together, we're crafting solutions that make an impact!"
        </p>

        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-member">
            <div className="team-photo">
              <img src="anjali.jpg" alt="Team Member 1" />
            </div>
            <div className="team-info">
              <p className="team-name">Anjali Sen</p>
              <p className="team-designation">UI/UX Designer</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <div className="team-photo">
              <img src="bhumika.jpg" alt="Team Member 2" />
            </div>
            <div className="team-info">
              <p className="team-name">Bhumika Chaturvedi</p>
              <p className="team-designation">Frontend Developer</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <div className="team-photo">
              <img src="juhi.jpg" alt="Team Member 3" />
            </div>
            <div className="team-info">
              <p className="team-name">Juhi Harsh</p>
              <p className="team-designation">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
