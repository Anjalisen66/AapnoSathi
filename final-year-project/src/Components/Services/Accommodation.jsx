import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMap,
  FaUniversity,
  FaTrain,
  FaTimes,
} from "react-icons/fa";
import { Pagination } from "./Pagination";



const Accommodation = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [fetchedAccommodations, setFetchedAccommodations] = useState([]);
  const [places, setPlaces] = useState([]);
  const [filters, setFilters] = useState({
    accomodation: "",
    maxRent: "",
    room_sharing: "",
    ac: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const ACCOMODATION_URL=process.env.REACT_APP_ACCOMODATION_URL;
  const AUTH_URL=process.env.REACT_APP_AUTH_URL

  useEffect(() => {
    fetchPlaces();
  }, [currentPage, filters]);

  const fetchPlaces = async (filterParams = {}) => {
    try {
      const query = new URLSearchParams({ ...filterParams, page: currentPage, limit: itemsPerPage }).toString();
      const response = await axios.get(`${ACCOMODATION_URL}/api/pgs?${query}`);

      setFetchedAccommodations(response.data.places);
      setTotalPages(response.data.totalPages); // Assuming totalPages is part of the response
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    setCurrentPage(1); // Reset to first page when filters change
    fetchPlaces(filters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const openPhoneModal = (phone) => {
    setSelectedPhone(phone);
  };

  const closePhoneModal = () => {
    setSelectedPhone(null);
  };

  const toggleCard = (index, phone) => {
    if (expandedCard === index) {
      setExpandedCard(null);
      setSelectedPhone(null); // Hide phone when collapsing
    } else {
      setExpandedCard(index);
      setSelectedPhone(phone); // Show phone when expanding
    }
  };
  


  return (
    <div className="min-h-screen bg-[#edeecb] font-serif text-[#693303] px-6 pb-10 relative style={{ fontFamily: 'Garamond, serif' }}">
      {/* Decorative Corners
      {[
        "top-0 left-0",
        "top-0 right-0",
        "bottom-0 left-0",
        "bottom-0 right-0",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-12 h-12 bg-no-repeat bg-contain ${pos}`}
          style={{ backgroundImage: "url('/corner.png')" }}
        />
      ))} */}

      {/* Header Image */}
      <img
        src="/jodh.jpeg"
        alt="Banner"
        className="  w-full h-64 object-cover border border-[#edeecb]"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mt-8">
        Accommodation in Jodhpur
      </h1>
      <p className="text-center text-lg mt-3 max-w-2xl mx-auto">
        Find Paying Guest (PG) accommodations and rooms for rent in Jodhpur with
        a blend of traditional and modern living options.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <select name="accomodation" onChange={handleFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">All</option>
          <option value="boys only">Boys</option>
          <option value="girls only">Girls</option>
          <option value="boys and girls">Boys and Girls</option>
        </select>
        {/* <select className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option>Budget</option>
          <option>₹ Min</option>
          <option>₹ 4000</option>
          <option>₹ 6000</option>
          <option>₹ 8000</option>
          <option>₹ 10000</option>
          <option>₹ 12000</option>
          <option>₹ 15000</option>
          <option>₹ 20000</option>
        </select> */}
        <input
          type="number"
          name="maxRent"
          placeholder="Max Rent"
          onChange={handleFilterChange}
          className=" py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer text-center"
        />
        <select name="room_sharing" onChange={handleFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">Occupancy</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option>
          <option value="four">Others</option>
        </select>
        <select name="ac" onChange={handleFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">AC/NON-AC</option>
          <option value="available">AC</option>
          <option value="not available">NON-AC</option>
        </select>

        <button onClick={applyFilters} className="px-5 py-2 bg-[#652d0e] text-white rounded hover:bg-[#7a3b1c]">
          Filter
        </button>
      </div>

      {/* PG Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
        {fetchedAccommodations.length === 0 ? (
          <p>No data available</p>
        ) : (
          fetchedAccommodations.map((pg, idx) => (
            <div
              key={idx}
              className="border-2 border-darkbrown rounded-lg overflow-hidden shadow-md bg-white"
            >
              <img
                src={`${ACCOMODATION_URL}/${pg.image}`}
                alt={pg.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-darkbrown">
                <h2 className="text-xl font-semibold">{pg.name}</h2>
                <p className="text-lg">
                  {pg.accomodation} • {pg.location}
                </p>
                <p className="text-sm mt-1"><strong>Occupancy:</strong> {pg.room_sharing}</p>
                <p className="text-sm mt-1"><strong>AC:</strong> {pg.ac}</p>
                <p className="text-sm mt-1"><strong>Amenities:</strong> {pg.amenities}</p>
                <p className="text-sm mt-1"><strong>Price:</strong> {pg.rent}</p>
                {/* <p className="mt-2">⭐ {pg.rating}</p> */}
              </div>

              <div className="flex flex-wrap gap-2 px-4 mb-4">
                <button
                  onClick={() => openPhoneModal("9123456780")}
                  className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4]"
                >
                  <FaPhone className="inline mr-1" /> View Phone No.
                </button>
                {/* <button className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4]">
                  Contact Owner
                </button> */}
                <button className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4]">
                  <a
                    href={pg.link}
                    target="_blank"
                    rel="noopener noreferrer"
        
                  ><FaMap className="inline mr-1" /> View on Map</a>
                  
                </button>
              </div>
            </div>

          )))}
      </div>

      {/* Phone Modal */}
      {selectedPhone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 relative border border-[#c89e6e]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              onClick={closePhoneModal}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Phone Number</h2>
            <p className="text-lg font-mono text-[#693303]">{selectedPhone}</p>
            <button
              onClick={closePhoneModal}
              className="mt-4 px-4 py-2 bg-[#c89e6e] text-white rounded hover:bg-[#b98a5d]"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* <Pagination /> */}
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-[#652d0e] text-white rounded-md hover:bg-[#652d0eE6] disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          Previous
        </button>

        <span className="text-[#652d0e] font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-[#652d0e] text-white rounded-md hover:bg-[#652d0eE6] disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Accommodation;
