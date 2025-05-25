import React, { useState } from "react";
import { FaSmile, FaMeh, FaFrown, FaAngry, FaGrinStars } from "react-icons/fa";

const UmaidBhawan = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const ratingIcons = [
    { icon: <FaAngry />, color: "text-red-600", label: "Very Bad" },
    { icon: <FaFrown />, color: "text-orange-400", label: "Bad" },
    { icon: <FaMeh />, color: "text-yellow-500", label: "Okay" },
    { icon: <FaSmile />, color: "text-lime-500", label: "Good" },
    { icon: <FaGrinStars />, color: "text-green-500", label: "Excellent" },
  ];

  const ratingColors = [
    "bg-red-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-lime-500",
    "bg-green-500",
  ];

  // Array of 5 different image URLs
  const smallImages = ["/u1.jpg", "/u2.jpg", "/u3.jpg", "/u4.jpg", "/u5.jpg"];

  return (
    <div className="relative bg-[#edeecb] p-4 md:p-10 font-serif overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-[#652d0e] text-center mb-6">
        Umaid Bhawan Palace
      </h1>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Left Column */}
        <div>
          <img
            src="/u.jpg"
            alt="Mehrangarh Fort"
            className="w-full h-[300px] object-cover rounded-xl"
          />

          {/* Small Images */}
          <div className="flex justify-between mt-4 gap-2">
            {smallImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Mehrangarh Fort ${index + 1}`}
                className="w-1/5 h-20 object-cover rounded-md"
              />
            ))}
          </div>

          {/* Ratings */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Rate this Place</h2>
            <div className="flex items-center space-x-4 text-2xl">
              {ratingIcons.map((rating, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedRating(index)}
                  className={`${rating.color} ${
                    selectedRating === index ? "scale-125" : "opacity-70"
                  } transition-transform`}
                  title={rating.label}
                >
                  {rating.icon}
                </button>
              ))}
            </div>

            {/* Static background bar + Dynamic colored bar */}
            <div className="relative w-full h-2 mt-2 rounded-full bg-gray-300 overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full transition-all duration-300 ${
                  selectedRating !== null ? ratingColors[selectedRating] : ""
                }`}
                style={{
                  width:
                    selectedRating !== null
                      ? `${((selectedRating + 1) / ratingIcons.length) * 100}%`
                      : "0%",
                }}
              />
            </div>

            {/* Selected Rating Label */}
            {selectedRating !== null && (
              <p className="mt-1 text-sm text-gray-600">
                You rated this as:{" "}
                <strong>{ratingIcons[selectedRating].label}</strong>
              </p>
            )}
          </div>
        </div>

        {/* Right Column with Soft Fade Background & Aligned Boxes */}
        <div className="relative flex flex-col justify-between z-10 h-full">
          <div className="space-y-4 relative z-10 h-full flex flex-col justify-between">
            {/* Box 1 - Top aligned */}
            <h3 className="text-lg font-semibold bg-orange-300 px-3 py-1 inline-block rounded-t-md">
              Basic Information:
            </h3>
            <div className="border border-black  p-3 md:p-4 rounded-md shadow bg-transparent text-sm">
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong>Location:</strong> Jodhpur, Rajasthan, India
                </li>
                <li>
                  <strong>Description:</strong>A grand palace built during the
                  reign of Maharaja Umaid Singh, showcasing Indo-Deco
                  architecture and royal heritage.
                </li>
                <li>
                  Completed in 1943, it's one of the last royal palaces built in
                  India.
                </li>
                <li>
                  <strong>Best Time:</strong> October to March
                </li>
              </ul>
            </div>

            {/* Box 2 - Middle aligned */}
            <h3 className="text-lg font-semibold bg-orange-300 px-3 py-1 inline-block rounded-t-md">
              Accessibility:
            </h3>
            <div className="border border-black p-3 md:p-4 rounded-md shadow bg-transparent text-sm">
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong>Location:</strong> Umaid Bhawan Palace, Jodhpur
                </li>
                <li>
                  <strong>Nearest Airport:</strong> Jodhpur Airport (5 km)
                </li>
                <li>Railway Station: Jodhpur Junction (6 km)</li>
                <li>Bus Stop: Rai Ka Bagh Bus Stand (5.5 km)</li>
                <li>
                  <strong>Transport:</strong> Autos, taxis, rental cars, buses
                </li>
                <li>
                  <strong>Wheelchair Access:</strong> Partially accessible
                </li>
              </ul>
            </div>

            {/* Box 3 - Bottom aligned */}

            <h3 className="text-lg font-semibold bg-orange-300 px-3 py-1 inline-block rounded-t-md">
              Activities & Attractions:
            </h3>
            <div className="border border-black p-3 md:p-4 rounded-md shadow bg-transparent text-sm">
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong>Nearby:</strong> Mehrangarh Fort, Jaswant Thada, Clock
                  Tower
                </li>
                <li>
                  <strong>Museum:</strong> Explore vintage items, royal
                  artifacts, and old clocks
                </li>
                <li>
                  <strong>Heritage: </strong> Stay at the palace hotel operated
                  by Taj Hotels
                </li>
                <li>
                  <strong>Photography:</strong> Ideal for pre-wedding and
                  heritage photoshoots
                </li>
                <li>
                  <strong>Events:</strong> Destination weddings & royal
                  functions
                </li>
                <li>
                  <strong>Gardens: </strong> Lush green lawns and peacocks
                  around
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmaidBhawan;
