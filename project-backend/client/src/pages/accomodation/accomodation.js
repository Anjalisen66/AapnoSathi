import React, { useState, useEffect } from "react";
import axios from "axios";
import "./accomodation.css"; // Make sure your styles are correct

function Accomodation() {
  const [places, setPlaces] = useState([]);
  const [filters, setFilters] = useState({
    accomodation: "",
    maxRent: "",
    room_sharing: "",
    ac: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Adjust page size if needed

  useEffect(() => {
    fetchPlaces();
  }, [currentPage]); // Fetch places whenever page or filters change

  const fetchPlaces = async (filterParams = {}) => {
    try {
      const query = new URLSearchParams({ ...filterParams, page: currentPage, limit: itemsPerPage }).toString();
      const response = await axios.get(`http://localhost:5000/api/pgs?${query}`);

      setPlaces(response.data.places);
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

  return (
    <div className="container">
      <h1>Accomodation Places</h1>

      {/* Filter Section */}
      <div className="filter-container">
        <select name="accomodation" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="boys only">Boys</option>
          <option value="girls only">Girls</option>
          <option value="boys and girls">Boys and Girls</option>
        </select>

        <input
          type="number"
          name="maxRent"
          placeholder="Max Rent"
          onChange={handleFilterChange}
        />

        <select name="room_sharing" onChange={handleFilterChange}>
          <option value="">All Sharing</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option>
          <option value="four">Four</option>
        </select>

        <select name="ac" onChange={handleFilterChange}>
          <option value="">AC/Non-AC</option>
          <option value="available">AC Available</option>
          <option value="not available">Non-AC</option>
        </select>

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Display Places */}
      <div className="grid">
        {places.length === 0 ? (
          <p>No data available.</p>
        ) : (
          places.map((place) => (
            <div key={place._id} className="card">
              <img
                src={`http://localhost:5001/uploads/${place.image}`}
                alt={place.name}  
                className="place-image"
              />
              <h3>{place.name}</h3>
              <p><strong>Location:</strong> {place.location}</p>
              <p><strong>Rent:</strong> ₹{place.rent}</p>
              <p><strong>Room Sharing:</strong> {place.room_sharing}</p>
              <p><strong>AC:</strong> {place.ac}</p>
              <p><strong>Accommodation:</strong> {place.accomodation}</p>
              <p><strong>Food:</strong> {place.food}</p>
              <p><strong>Deposit:</strong> ₹{place.deposit_amount}</p>
              <p><strong>Amenities:</strong> {place.amenities}</p>
              <p>
                <strong>Website:</strong> 
                <a href={place.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
              </p>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Accomodation;
