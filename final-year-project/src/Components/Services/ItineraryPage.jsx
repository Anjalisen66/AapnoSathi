import React, { useState, useEffect } from "react";
import "./ItineraryPage.css"; // Custom CSS for fade-slide transitions
import hotairBalloon from "../../assets/WhatsApp_Image_2025-04-08_at_16.03.34_dfdc4c00-removebg-preview.png"

const sections3Day = [
  {
    time: "Day 1 - Morning (8:00 AM - 11:00 AM)",
    title: "Mehrangarh Fort",
    description: [
      "The crown jewel of Jodhpur!",
      "Entry Fee: ₹100 (Students ₹50 with valid ID)",
      "DSLR Fee ₹100 (for enthusiasts)",
      "Tip: Visit early to enjoy the views and cooler temps!",
    ],
    icon: "mehrangarh-fort-jodhpur.jpg",
  },
  {
    time: "Day 1 - Brunch (11:30 AM - 12:30 PM)",
    title: "Local Delights",
    description: [
      "Shahi Samosa | Chaturbhuj Laddu",
      "Mishrilal Lassi",
      "Clock Tower area",
      "Cost: ₹150-200 approx",
    ],
    icon: "ghantaghar.jpg",
  },
  {
    time: "Day 2 - Morning (8:00 AM - 11:00 AM)",
    title: "Jaswant Thada & Umaid Bhawan Palace",
    description: [
      "Jaswant Thada: A royal memorial",
      "Umaid Bhawan Palace: A glimpse of grandeur",
      "Entry Fee: ₹30 | ₹60",
      "Auto to Umaid Bhawan from Jaswant Thada",
    ],
    icon: "jt.jpg",
  },
  {
    time: "Day 2 - Afternoon (1:00 PM - 3:00 PM)",
    title: "Clock Tower & Sardar Market",
    description: [
      "Ghanta Ghar (Clock Tower) & Sardar Market",
      "Shop: Spices, Jodhpuri Juttis & Souvenirs",
      "Try: Omelette Shop (famous street food)",
      "Cost: ₹200-300 shopping range",
    ],
    icon: "sardar.jpg",
  },
  {
    time: "Day 3 - Morning (8:00 AM - 11:00 AM)",
    title: "Toorji Ka Jhalra & Rooftop Café",
    description: [
      "Toorji Ka Jhalra Stepwell",
      "Dinner: Stepwell Café / Nirvana / Indique",
      "Tip: Go for candlelight rooftop view!",
      "Cost: ₹300-500 per meal",
    ],
    icon: "Toorji Ka Jhalra .jpg",
  },
];

const sections1Day = [
  {
    time: "Morning (8:00 AM - 11:00 AM)",
    title: "Mehrangarh Fort",
    description: [
      "The crown jewel of Jodhpur!",
      "Entry Fee: ₹100 (Students ₹50 with valid ID)",
      "DSLR Fee ₹100 (for enthusiasts)",
      "Tip: Visit early to enjoy the views and cooler temps!",
    ],
    icon: "mehrangarh-fort-jodhpur.jpg",
  },
  {
    time: "Brunch (11:30 AM - 12:30 PM)",
    title: "Local Delights",
    description: [
      "Shahi Samosa | Chaturbhuj Laddu",
      "Mishrilal Lassi",
      "Clock Tower area",
      "Cost: ₹150-200 approx",
    ],
    icon: "ghantaghar.jpg",
  },
  {
    time: "Afternoon (1:00 PM - 3:00 PM)",
    title: "Jaswant Thada & Umaid Bhawan Palace",
    description: [
      "Jaswant Thada: A royal memorial",
      "Umaid Bhawan Palace: A glimpse of grandeur",
      "Entry Fee: ₹30 | ₹60",
      "Auto to Umaid Bhawan from Jaswant Thada",
    ],
    icon: "jt.jpg",
  },
  {
    time: "Evening (5:00 PM - 6:30 PM)",
    title: "Clock Tower & Sardar Market",
    description: [
      "Ghanta Ghar (Clock Tower) & Sardar Market",
      "Shop: Spices, Jodhpuri Juttis & Souvenirs",
      "Try: Omelette Shop (famous street food)",
      "Cost: ₹200-300 shopping range",
    ],
    icon: "sardar.jpg",
  },
  {
    time: "Sunset & Dinner (6:30 PM - 8:00 PM)",
    title: "Toorji Ka Jhalra & Rooftop Café",
    description: [
      "Toorji Ka Jhalra Stepwell",
      "Dinner: Stepwell Café / Nirvana / Indique",
      "Tip: Go for candlelight rooftop view!",
      "Cost: ₹300-500 per meal",
    ],
    icon: "Toorji Ka Jhalra .jpg",
  },
];

const ItineraryPage = () => {
  const [selectedItinerary, setSelectedItinerary] = useState(1);
  const [fade, setFade] = useState(false);

  const sectionsToDisplay =
    selectedItinerary === 1 ? sections1Day : sections3Day;

  const backgroundImage =
    selectedItinerary === 1
      ? "url('heade.jpg')" // Replace with your 1-day bg
      : "url('heade.jpg')"; // Replace with your 3-day bg

  const handleTabChange = (day) => {
    setFade(true);
    setTimeout(() => {
      setSelectedItinerary(day);
      setFade(false);
    }, 300); // Duration matches fade CSS
  };

  return (
    <div className="bg-[#edeecb] min-h-screen font-serif text-[#502b1d] transition-all duration-500 ease-in-out">
      {/* Header with background image transition */}
      <div
        className={`relative h-56 bg-cover bg-center transition-opacity duration-500 ease-in-out ${fade ? "fade-out" : "fade-in"
          }`}
        style={{ backgroundImage }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#feffed] bg-black bg-opacity-40">
          <h2 className="text-2xl font-bold animate-fadeIn">
            {selectedItinerary === 1 ? "1 DAY" : "3 DAY"}
          </h2>
          <h1 className="text-4xl font-extrabold italic drop-shadow-md animate-fadeIn">
            Jodhpur Itinerary
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-2 border-t border-b border-orange-200">
        <button
          className={`px-4 py-2 font-semibold transition-all duration-300 hover:bg-orange-100 ${selectedItinerary === 1
              ? "text-[#693303] border-b-4 border-[#693303]"
              : "text-gray-600"
            }`}
          onClick={() => handleTabChange(1)}
        >
          1 Day Itinerary
        </button>
        <button
          className={`px-4 py-2 font-semibold transition-all duration-300 hover:bg-orange-100 ${selectedItinerary === 2
              ? "text-[#693303] border-b-4 border-[#693303]"
              : "text-gray-600"
            }`}
          onClick={() => handleTabChange(2)}
        >
          3 Day Itinerary
        </button>
      </div>

      {/* Itinerary Sections */}
      <div className="max-w-4xl mx-auto py-10 px-5 space-y-10 animate-fadeIn">
        {sectionsToDisplay.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 group transition-all duration-500"
          >
            <img
              src={item.icon}
              alt="icon"
              className="w-20 h-20 rounded-full object-cover border-2 border-orange-200 shadow-md transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#e0b754] group-hover:shadow-xl"
            />
            <div>
              <h3 className="text-lg font-bold text-[#693303]">
                {item.time} - {item.title}
              </h3>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}


        <div className="text-sm text-center text-red-700 mt-6">
          🌟 Final Tip: Catch a night train or bus back if you're on a weekend
          trip!

          <div className="relative w-full">
            <img
              className="absolute -right-20 -top-80 h-auto w-auto max-w-full object-contain"
              src={hotairBalloon}
              alt="Hot Air Balloon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
