import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import desert from "../assets/image1.jpg";
import filterDecor from "../assets/image2.jpg";
import collage from "../assets/image.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { FaMap } from "react-icons/fa";
import ReacrCollage from "./ReacrCollage";
import landscape from "../assets/pexels-ankit-gupta-1279552-2491830.jpg";

const ExploreJodhpur = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // const places = [
  //   "Mehrangarh Fort",
  //   "Umaid Bhawan Palace",
  //   "Jaswant Thada",
  //   "Clock Tower",
  //   "Mandore Gardens",
  //   "Toorji Ka Jhalra",
  // ];

  const attractions = [
    {
      name: "Mehrangarh Fort",
      image: "/mehrangarhImg.jpg",
      path: "mehrangarh-fort",
    },
    {
      name: "Mandore Gardens",
      image: "/mandore-gardens.jpg",
      path: "mandore-gardens",
    },
    {
      name: "Umaid Bhawan Palace",
      image: "/UmaidBhawan.jpg",
      path: "umaid-bhawan-palace",
    },
  ];

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(
      value.length > 0
        ? places.filter((place) =>
          place.toLowerCase().includes(value.toLowerCase())
        )
        : []
    );
  };

  const handleSelect = (place) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/place/${encodeURIComponent(place)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      handleSelect(query.trim());
    }
  };

  const handleCardClick = (path) => {
    navigate(`/place/${path}`);
  };

  const [places, setPlaces] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    cost: "",
    rating: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const TOURIST_URL=process.env.REACT_APP_TOURIST_URL
  // const navigate = useNavigate();

  useEffect(() => {
    fetchPlaces();
  }, [currentPage, filters]);

  const fetchPlaces = async (filterParams = {}) => {
    try {
      const query = new URLSearchParams(filterParams).toString();
      const response = await axios.get(`${TOURIST_URL}/api/places?${query}`);
      setPlaces(response.data);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    fetchPlaces(filters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* <div
        className="w-full h-[350px] bg-cover bg-center relative flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${desert})` }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0" />
        <div className="z-10">
          <h1 className="text-4xl sm:text-5xl font-bold">TRAVEL MEMORIES</h1>
          <p className="text-xl mt-2">YOU’LL NEVER FORGET</p>
          <div className="mt-4 text-3xl animate-bounce">⬇️</div>
        </div>
      </div> */}

      {/* Collage Image + Search */}
      <div className="relative px-6">
        <img
          src={landscape}
          alt="Jodhpur Collage"
          className="w-full h-[400px] object-cover"
        />
        {/* <form
          onSubmit={handleSubmit}
          className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] bg-white shadow-md rounded-2xl flex flex-col z-10"
        >
          <div className="flex items-center justify-between px-4 py-2">
            <input
              type="text"
              placeholder="Search tourist places..."
              value={query}
              onChange={handleInput}
              className="flex-grow px-2 py-1 text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              🔍
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="bg-white border-t border-gray-200 rounded-b-2xl max-h-40 overflow-y-auto">
              {suggestions.map((place, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(place)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {place}
                </li>
              ))}
            </ul>
          )}
        </form> */}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10 mt-10">
        <select name="category" onChange={handleFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">All Categories</option>
          <option value="Historical">Historical</option>
          <option value="Fort">Fort</option>
          <option value="Hill">Hill</option>
          <option value="Dam">Dam</option>
          <option value="Town">Town</option>
        </select>
        <input
          type="number"
          name="cost"
          placeholder="Max Cost"
          onChange={handleFilterChange}
          className=" py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer text-center"
        />
        <input
          type="number"
          name="rating"
          placeholder="Min Rating"
          onChange={handleFilterChange}
          className=" py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer text-center"
        />
        <button onClick={applyFilters} className="px-5 py-2 bg-[#652d0e] text-white rounded hover:bg-[#652d0eE6]">
          Filter
        </button>
        <Link to="/itinerary">
          <button className="py-2 px-2 border border-[#652d0e] text-white rounded bg-[#652d0e] outline-none cursor-pointer">
            View Itinerary
          </button>
        </Link>
      </div>

      {/* touristplaces Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {places.length === 0 ? (
          <p className="text-sm mt-1">No data available.</p>
        ) : (
          places.map((place, index) => (
            <div
              key={index}
              className="border-2 text-[#693303] rounded-lg overflow-hidden shadow-md bg-white"
            >
              <img
                src={`${TOURIST_URL}/uploads/${place.image}`}
                alt={place.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-[#693303]">
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <p className="text-sm"><strong>Location: </strong>{place.location}</p>
                <p className="text-sm"><strong>Entry Fee: </strong>{place.cost}</p>
                <div className="flex flex-wrap justify-between gap-6 px-4 mb-4">
                  <p className="mt-2">⭐ {place.rating}</p>

                  <a
                    href={place.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4] text-center"
                  ><button><FaMap className="inline mr-1" /> View on Map
                    </button></a>
                </div>

              </div>
            </div>
          )))}
      </div>

      <ReacrCollage />

      {/* Attractions Section */}
      {/* Attractions Section */}
      <div className="bg-[#edeecb] py-16 px-4 md:px-20">
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-orange-600 mb-10">
          Jodhpur’s Most Popular Attractions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover"
              />
              <div
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-orange-500 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(item.path);
                }}
              >
                <ArrowRight className="text-gray-700 hover:text-white transition duration-300" />
              </div>

              <div className="absolute bottom-3 left-3 text-white text-lg font-bold drop-shadow-lg">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <Link to="/itinerary">
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            View Itinerary
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreJodhpur;
