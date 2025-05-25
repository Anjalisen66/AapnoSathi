import React, { useState, useEffect } from "react";
import axios from "axios";
import "./food.css";  // If you are using the same CSS file, adjust accordingly.

function FoodPlaces() {
  const [foodPlaces, setFoodPlaces] = useState([]);
  const [foodFilters, setFoodFilters] = useState({
    type: "",
    maxCost: "",
    foodType: "",
    dineIn: "",
    takeaway: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchFoods(foodFilters, currentPage);
  }, [currentPage]);

  const fetchFoods = async (filterParams = {}, page = 1) => {
    try {
      const params = { ...filterParams, page, limit: 10 };
      const query = new URLSearchParams(params).toString();
      const response = await axios.get(`http://localhost:5002/api/foods?${query}`);
      setFoodPlaces(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching food places:", error);
    }
  };

  const handleFoodFilterChange = (e) => {
    setFoodFilters({ ...foodFilters, [e.target.name]: e.target.value });
  };

  const applyFoodFilters = () => {
    setCurrentPage(1); // Reset to first page on filter apply
    fetchFoods(foodFilters, 1);
  };

  return (
    <div className="container">
      <h1>Food Places</h1>

      {/* Food Filter Section */}
      <div className="filter-container">
        <select name="type" onChange={handleFoodFilterChange}>
          <option value="">All Types</option>
          <option value="restaurant">Restaurant</option>
          <option value="cafe">Café</option>
          <option value="dhaba">Dhaba</option>
          <option value="local">Local Food</option>
        </select>

        <input
          type="number"
          name="maxCost"
          placeholder="Max Cost"
          onChange={handleFoodFilterChange}
        />

        <select name="foodType" onChange={handleFoodFilterChange}>
          <option value="">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="veg and non-veg">Veg & Non-Veg</option>
        </select>

        <select name="dineIn" onChange={handleFoodFilterChange}>
          <option value="">Dine In?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select name="takeaway" onChange={handleFoodFilterChange}>
          <option value="">Takeaway?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <button onClick={applyFoodFilters}>Apply Food Filters</button>
      </div>

      {/* Food Cards */}
      <div className="grid">
        {foodPlaces.length === 0 ? (
          <p className="grid1">No food data available.</p>
        ) : (
          foodPlaces.map((place) => (
            <div key={place._id} className="card">
              <img
                src={`http://localhost:5002/uploads/${place.image}`}
                alt={place.name}
                className="place-image"
              />
              <h3>{place.name}</h3>
              <p><strong>Location:</strong> {place.location}</p>
              <p><strong>Type:</strong> {place.type}</p>
              <p><strong>Cost:</strong> ₹{place.cost}</p>
              <p><strong>Cuisine:</strong> {place.cuisine}</p>
              <p><strong>Specialty:</strong> {place.specialty}</p>
              <p><strong>Food Type:</strong> {place.foodType}</p>
              <p><strong>Dine In:</strong> {place.dineIn ? "Yes" : "No"}</p>
              <p><strong>Takeaway:</strong> {place.takeaway ? "Yes" : "No"}</p>
              <p>
                <strong>Website:</strong>{" "}
                <a href={place.link} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </p>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FoodPlaces;
