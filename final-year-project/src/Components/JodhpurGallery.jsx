import React from "react";
import frameImage from "../assets/frameImage.png";
import pagadImage from "../assets/pagadImage.png";
import camelImage from "../assets/lady.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const JodhpurGallery = () => {
  return (
    <section className="relative bg-[#eedcb] p-10 overflow-hidden">
      <h2
        className="text-center text-3xl sm:text-5xl font-bold mb-16 text-[#7a3b1c]"
        style={{ fontFamily: "Garamond, serif" }}
      >
        Some Glimpse of Jodhpur Gallery
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col sm:flex-row justify-center items-center relative gap-6 sm:gap-4">
        {/* Card 1 - Largest */}
        <div
          className="relative w-[280px] sm:w-[320px] transform hover:scale-105"
          style={{ zIndex: 3 }}
        >
          <img src={frameImage} alt="Frame" className="w-full" />
          <img
            src={image1}
            alt="Jodhpur Scene 1"
            className="absolute top-8 left-8 w-[75%] h-[75%] object-cover rounded-lg shadow-md"
          />
          {/* Tilted Pagadi Image */}
          <img
            src={pagadImage}
            alt="Pagadi"
            className="absolute top-[-30px] left-[-30px] w-[60px] sm:w-[80px] rotate-[-20deg]"
          />
        </div>

        {/* Card 2 - Medium */}
        <div
          className="relative w-[220px] sm:w-[260px] transform hover:scale-105 sm:translate-y-10 -translate-y-6"
          style={{ zIndex: 2, marginLeft: "-40px" }}
        >
          <img src={frameImage} alt="Frame" className="w-full" />
          <img
            src={image2}
            alt="Jodhpur Scene 2"
            className="absolute top-9 left-8 w-[73%] h-[72%] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Card 3 - Smallest */}
        <div
          className="relative w-[200px] sm:w-[240px] transform hover:scale-105 sm:-translate-y-8 -translate-y-4"
          style={{ zIndex: 1, marginLeft: "-40px" }}
        >
          <img src={frameImage} alt="Frame" className="w-full" />
          <img
            src={image3}
            alt="Jodhpur Scene 3"
            className="absolute top-9 left-6 w-[77%] h-[73%] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Camel Image */}
      <img
        src={camelImage}
        alt="Camel"
        className="absolute bottom-0 right-8 w-[100px] sm:w-[200px]  hidden sm:block" // Hide on mobile
      />
    </section>
  );
};

export default JodhpurGallery;
