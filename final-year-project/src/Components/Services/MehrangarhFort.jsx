import React, { useState } from "react";
import { FaSmile, FaMeh, FaFrown, FaAngry, FaGrinStars } from "react-icons/fa";

const MehrangarhFort = () => {
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
  const smallImages = [
    "/m1.jpeg",
    "/m2.avif",
    "/m3.avif",
    "/m4.avif",
    "/m5.avif",
  ];

  return (
    <div className="relative bg-[#edeecb] p-4 md:p-10 font-serif overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-[#652d0e] text-center mb-6">
        Mehrangarh Fort
      </h1>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Left Column */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  <strong>Description:</strong> One of the largest forts in
                  India, Mehrangarh Fort stands majestically on a rocky hill,
                  offering panoramic views of Jodhpur.
                </li>
                <li>
                  Built in the 15th century by Rao Jodha, showcasing grand
                  architecture and museums.
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
                  <strong>Location:</strong> Mehrangarh Fort, Jodhpur
                </li>
                <li>
                  <strong>Nearest Airport:</strong> Jodhpur Airport (9 km)
                </li>
                <li>Railway Station: Jodhpur Junction (6 km)</li>
                <li>Bus Stop: Ratan Bagh Bus Stand (6 km)</li>
                <li>
                  <strong>Transport:</strong> Autos, taxis, rental cars, buses
                </li>
                <li>
                  <strong>Wheelchair Access:</strong> Ramps & elevator available
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
                  <strong>Nearby:</strong> Jaswant Thada, Clock Tower, Umaid
                  Bhawan Palace
                </li>
                <li>
                  <strong>Culture:</strong> Rajasthani music & Kalbeliya dance
                </li>
                <li>
                  <strong>Festivals:</strong> Marwar Festival
                </li>
                <li>
                  <strong>Food:</strong> Makhaniya Lassi, Local Maas, Methi
                  Bhaji
                </li>
                <li>
                  <strong>Adventure:</strong> Zip Lining, Desert Safari
                </li>
                <li>
                  <strong>Blue City Walk:</strong> Explore blue-painted old city
                  houses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MehrangarhFort;
