import React, { useState, useEffect } from "react";
import axios from "axios";
import LocalFood from "../../assets/LocalFood2.png"
import { FaMap } from "react-icons/fa";
import zomato from "../../assets/1637644.webp"


// --- FoodPage Component ---
const FoodPage = () => {

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
  const FOOD_URL=process.env.REACT_APP_FOOD_URL;

  useEffect(() => {
    fetchFoods(foodFilters, currentPage);
  }, [currentPage, foodFilters]);

  const fetchFoods = async (filterParams = {}, page = 1) => {
    try {
      const params = { ...filterParams, page, limit: 10 };
      const query = new URLSearchParams(params).toString();
      const response = await axios.get(`${FOOD_URL}/api/foods?${query}`);
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="text-[#793319] min-h-screen p-6 style={{ fontFamily: 'Garamond, serif' }}">
      {/* Top Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-6 relative">
        <h1 className="text-4xl md:text-5xl text-[#652d0e] font-bold text-center p-4">
          Jodhpur’s Flavours – From Streets to Royals
        </h1>
        <img src={LocalFood} alt="food" className="w-40 h-40" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select name="type" onChange={handleFoodFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">All Types</option>
          <option value="restaurant">Restraunt</option>
          <option value="cafe">Cafe</option>
          <option value="dhaba">Dhaba</option>
          <option value="local">Local Food</option>
          <option value="cloud kitchen">Cloud Kitchen</option>
          <option value="tiffin service">Tiffin Service</option>
        </select>
        {/* <input
          type="number"
          name="maxCost"
          placeholder="Max Cost"
          onChange={handleFoodFilterChange}
          className=" py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer text-center"
        /> */}
        <select name="foodType" onChange={handleFoodFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">Veg/Non-Veg</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="veg and non-veg">Veg and Non-Veg</option>
        </select>
        <select name="dineIn" onChange={handleFoodFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">Dine In?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="takeaway" onChange={handleFoodFilterChange} className="px-4 py-2 border border-[#652d0e] rounded bg-[#f9e8d2] outline-none cursor-pointer">
          <option value="">Takeaway?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button onClick={applyFoodFilters} className="px-5 py-2 bg-[#652d0e] text-white rounded hover:bg-[#652d0eE6]">
          Filter
        </button>
      </div>

      {/* Restaurants Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {foodPlaces.length === 0 ? (
          <p className="text-sm mt-1">No data available.</p>
        ) : (
          foodPlaces.map((res, index) => (
            <div
              key={index}
              className="border-2 border-darkbrown rounded-lg overflow-hidden shadow-md bg-white"
            >
              <img
                src={`${FOOD_URL}/${res.image}`}
                alt={res.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-darkbrown">
                <h2 className="text-xl font-semibold">{res.name}</h2>
                <p className="text-sm">
                  <strong>{res.type} • {res.location}</strong>
                </p>
                <p className="text-sm mt-1"><strong>Category: </strong>{res.foodType}</p>
                <p className="text-sm mt-1"><strong>Cuisine: </strong>{res.cuisine}</p>
                <p className="text-sm mt-1"><strong>Speciality: </strong>{res.specialty}</p>
                <div className="flex items-center justify-between gap-6 px-4 mb-4 mt-4">
                   <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="flex-1 text-sm border border-[#652d0e] text-[#693303] py-1 rounded hover:bg-[#f5d6a4] text-center"
                  > <img className="h-8 w-auto rounded cursor-pointer" src={zomato} alt="zomato" /></a>
                 
                  <a
                    href={res.location_link}
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

      {/* Local Cuisine Section */}
      <div className="mt-16 px-6">
        <h2 className="text-3xl text-[#652d0e] font-bold text-center text-darkbrown mb-6">
          Local Cuisine
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-darkbrown">
          {/* Each dish */}
          {[
            {
              img: "दाल_बाटी_चूरमा-removebg-preview.png",
              name: <p className="text-[#652d0e]">Dal Baati Churma</p>,
              desc: (
                <p className="text-[#793319]">
                  Dal Bati Churma is probably the most common dish in the Marwar
                  area of Rajasthan. Tasted in several places.
                </p>
              ),
            },
            {
              img: "mirchi_bada-removebg-preview.png",
              name: <p className="text-[#652d0e]">Mirchi Bada</p>,
              desc: (
                <p className="text-[#793319]">
                  Mirchi Vada, a deep fried pastry stuffed with green chilly and
                  cauliflower. Special aroma!
                </p>
              ),
            },
            {
              img: "mawa_kachori-removebg-preview.png",
              name: <p className="text-[#652d0e]">Mawa Kachori</p>,
              desc: (
                <p className="text-[#793319]">
                  A sweet kachori stuffed with mawa and dry fruits, deep-fried
                  and dipped in sugar syrup.
                </p>
              ),
            },
            {
              img: "Pyaaz-Kachori-1-removebg-preview.png",
              name: <p className="text-[#652d0e]">Pyaaz Kachori</p>,
              desc: (
                <p className="text-[#793319]">
                  A spicy onion-stuffed flaky deep-fried pastry. Best enjoyed
                  with chutney.
                </p>
              ),
            },
          ].map((dish, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-sm mt-2">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- RecommendedPlaces Component ---
const RecommendedPlaces = () => {
  const places = [
    {
      name: "Shri Mishrilal Hotel",
      type: "Shri Mishrilal Hotel, established in 1927, is a historic eatery located near the Clock Tower in Jodhpur, Rajasthan. Renowned for its signature Makhaniya Lassi, a rich and creamy yogurt-based drink, the establishment has become a must-visit spot for both locals and tourists seeking authentic Rajasthani flavors.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioT4u7WcWvBMann2l7t5oMBFzttUOvCVKGw&s",
    },
    {
      name: "Janta Sweet Home",
      type: "Janta Sweet Home is a popular local sweets shop known for its delicious traditional Indian sweets and snacks. It offers a wide range of treats, from crispy snacks to mouth-watering desserts, loved by locals and visitors alike.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNYFUs2g9j2ibUHdhWC2AsbdRgn73KaA6iA&s",
    },
    {
      name: "Gypsy Dining Hall",
      type: "Gypsy Dining Hall in Sardarpura, Jodhpur, is a renowned vegetarian restaurant celebrated for its authentic Rajasthani thali, offering a wide array of traditional dishes at an affordable price point of approximately ₹800 for two people.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-2RFxqQK8KBL2GLOWg9S8y-jxdNypqoMjQ&s",
    },
    {
      name: "On The Rocks",
      type: "On The Rocks refers to a drink, typically a cocktail, served over ice cubes. It can also symbolize a situation or relationship facing difficulties or challenges.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KnW6CEIUjLuj-Wmwv8pqCluzvKSxnxcBKA&s",
    },
  ];

  return (
    <div className="min-h-screen bg-[#edeecb] flex flex-col items-center py-10 px-4 style={{ fontFamily: 'Garamond, serif' }}">
      <h1 className="text-4xl font-bold text-[#652d0e] mb-6 text-center">
        Recommended <br /> Places
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-5xl">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-[#f7f0e5] rounded-2xl shadow-md overflow-hidden border p-4 text-justify text-wrap"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-[#6b4226]">
                {place.name}
              </h2>
              <p className="text-[#6b4226] mt-2">{place.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page Combining Both ---
const FoodAndPlacesPage = () => {
  return (
    <div>
      <FoodPage />
      <RecommendedPlaces />
    </div>
  );
};

export default FoodAndPlacesPage;
