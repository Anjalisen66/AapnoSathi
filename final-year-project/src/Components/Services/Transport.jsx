import React, { useState, useEffect } from "react";
import header from "../../assets/20250428_1025_बस ऑटो रोड दृश्य_simple_compose_01jsxbx98zfx08nf3ahtc3qna7-fotor-20250521203026.png"

const Transport = () => {
  const [location, setLocation] = useState("");
  const [buses, setBuses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalFetched, setTotalFetched] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  const fetchBuses = async () => {
    setLoading(true);
    try {
      const url = location
        ? `http://localhost:5004/api/buses?location=${location}&page=${page}&limit=${limit}`
        : `http://localhost:5004/api/buses?page=${page}&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();

      setBuses(data.data);
      setTotalFetched(data.data.length);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching buses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBuses();
    // eslint-disable-next-line
  }, [page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchBuses();
  };
  return (
    <div className="bg-[#edeecb] font-serif">
      {/* Header Section
      <div className="bg-yellow-100 border-b-4 border-yellow-300 p-4">
        <h1 className="text-center text-4xl text-[#de5c0a] font-bold text-brown-800">Transport in Jodhpur</h1>
      </div> */}

      {/* Image Section */}
      <div className="flex justify-center mt-1 mb-4 ">
        <img
          src={header}
          alt="Transport in Jodhpur"
          className="w-full max-w-6xl h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Subtext */}
      <div className="text-center mt-6">
        <p className="text-lg text-gray-700 font-medium">
          View schedules and routes for local buses and autos in Jodhpur.
        </p>
      </div>

      {/* {bus info} */}
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#652d0e]">Jodhpur City Buses</h1>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter a location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border text-[#652d0e] border-gray-300 rounded-md px-4 py-2 w-full sm:w-96 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#652d0e] text-white px-6 py-2 rounded-md hover:bg-[#652d0eE6] transition"
          >
            Search
          </button>
        </form>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <>
            {buses.length === 0 ? (
              <p className="text-center text-red-500">No buses found for the given location.</p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
                  {buses.map((bus, index) => (
                    <div
                      key={index}
                      className="border text-[#652d0e] rounded-lg shadow-md p-4 hover:shadow-lg transition  border border-[#652d0e] rounded bg-[#f9e8d2]"
                    >
                      <h3 className="text-xl font-semibold text-[#652d0e] mb-2">
                        Bus Number: {bus.busNumber}
                      </h3>
                      <p><strong>From:</strong> {bus.from}</p>
                      <p><strong>To:</strong> {bus.to}</p>
                      <p><strong>Via:</strong> {bus.via.join(", ")}</p>
                      <p><strong>Distance:</strong> {bus.distance} km</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-md border ${page === 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-[#652d0e] text-white hover:bg-[#652d0eE6] transition"
                      }`}
                  >
                    ⬅ Prev
                  </button>

                  <span className="text-lg text-[#652d0e] font-medium">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded-md border ${page === totalPages
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-[#652d0e] text-white hover:bg-[#652d0eE6] transition"
                      }`}
                  >
                    Next ➡
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 px-8 mt-10 mb-12 text-[#793319]">
        {/* Bus Card */}
        <div className="border-2 border-yellow-300 bg-white p-6 rounded-xl text-center shadow-md ">
          <div className="text-5xl mb-4">🚌</div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-2">Buses</h2>
          {/* <p className="text-gray-600 mb-4">
            Route 5<br />
            8:00 AM – 8:00 PM
            <br />
            Paota to Ratanada
            <br />
            ₹15
          </p> */}
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full">
            View Details
          </button>
        </div>

        {/* Auto Card */}
        <div className="border-2 border-yellow-300 bg-white p-6 rounded-xl text-center shadow-md">
          <div className="text-5xl mb-4">🚖</div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-2">Autos</h2>
          {/* <p className="text-gray-600 mb-4">
            Timing
            <br />
            6:00 AM – 10:00 PM
            <br />
            Clock Tower to Railway Station
            <br />
            Approx. Fare
          </p> */}
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full">
            View Details
          </button>
        </div>

        {/* Shared Cabs Card */}
        <div className="border-2 border-yellow-300 bg-white p-6 rounded-xl text-center shadow-md">
          <div className="text-5xl mb-4">🚕</div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-2">
            Shared Cabs
          </h2>
          {/* <p className="text-gray-600 mb-4">
            Route B<br />
            7:30 AM – 3:50 PM
            <br />
            Nai Sarak to Mandore
            <br />
            Approx. ₹30
          </p> */}
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transport;
