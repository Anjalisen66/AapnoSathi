import React from "react";
import { FaHotel, FaBus, FaUtensils, FaInfoCircle } from "react-icons/fa";

const features = [
  { icon: <FaInfoCircle size={70} />, label: "CITY INFO" },
  { icon: <FaHotel size={70} />, label: "ACCOMMODATION" },
  { icon: <FaBus size={70} />, label: "TRANSPORT" },
  { icon: <FaUtensils size={70} />, label: "FOOD & RESTAURANT" },
];

const Features = () => {
  return (
    <section
      className="bg-[#edeecb] pt-10 lg:pt-20 m-10"
      style={{ fontFamily: "Garamond, serif" }}
    >
      {/* Heading aligned to the left */}
      <h2 className="text-[#7a3b1c] text-3xl sm:text-4xl font-bold mb-10">
        FEATURES
      </h2>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-10 sm:gap-8 py-5 px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-left transform transition-transform duration-500 hover:-translate-y-2 w-[220px] sm:w-[250px]"
          >
            <div className="text-[#7a3b1c] mb-4 flex justify-center">
              {feature.icon}
            </div>
            <p className="text-xl font-bold text-[#7a3b1c] text-center">
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
