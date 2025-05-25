import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-removebg.png";
// import flowerDesign from "../assets/untitled.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <header className="bg-[#edeecb] relative top-[-20px] ">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center px-6 pt-6 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Apno Sarthi Logo"
            className="h-[100px] sm:h-[100px] object-contain"
          />
        </div>

        {/* Navigation links (Desktop) */}
        <nav
          className="flex hidden sm:flex order-3 space-x-4 text-lg sm:text-xl mt-14"
          style={{ fontFamily: "Garamond, serif" }}
        >
          <Link to="/" className="text-primary hover:text-secondary">
            Home
          </Link>

          <div className="relative" ref={servicesRef}>
            <button
              onClick={toggleServicesMenu}
              className="text-primary hover:text-secondary focus:outline-none"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 bg-[#edeecb] shadow-lg rounded-lg py-2 w-48 z-30">
                {[
                  { to: "/accommodation", label: "Accommodation" },
                  { to: "/city-info", label: "City Info" },
                  { to: "/foodpage", label: "Food & Restaurants" },
                  { to: "/TouristPlaces", label: "Tourist Attractions" },
                  { to: "/transport", label: "Transport" },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={token ? to : "#"}
                    onClick={(e) => {
                      if (!token) {
                        e.preventDefault();
                        alert("Please login before using services.");
                      } else {
                        handleLinkClick();
                      }
                    }}
                    className="block px-4 py-2 hover:bg-[#693303] hover:text-[#edeecb]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>


          <Link to="/about" className="text-primary hover:text-secondary">
            About Us
          </Link>
          <Link to="/contact" className="text-primary hover:text-secondary">
            Contact Us
          </Link>

          {/* Conditional Login/Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="text-red-600 font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-primary hover:text-[secondary]">
              Login
            </Link>
          )}
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="sm:hidden flex flex-col space-y-1 cursor-pointer z-20 mt-4"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-1 bg-[#693303]"></div>
          <div className="w-6 h-1 bg-[#693303]"></div>
          <div className="w-6 h-1 bg-[#693303]"></div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-[120px] right-0 w-full bg-[#edeecb] shadow-md rounded-lg z-30">
            <ul className="flex flex-col space-y-4 text-lg p-4">
              <li>
                <Link to="/" className="text-primary hover:text-secondary" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>

              {/* Mobile Services dropdown only if logged in */}
              <li ref={servicesRef}>
                <button
                  onClick={toggleServicesMenu}
                  className="text-primary hover:text-secondary w-full text-left focus:outline-none"
                >
                  Services
                </button>
                {isServicesOpen && (
                  <ul className="bg-white rounded-lg mt-2 p-2">
                    {[
                      { to: "/accommodation", label: "Accommodation" },
                      { to: "/city-info", label: "City Info" },
                      { to: "/foodpage", label: "Food & Restaurants" },
                      { to: "/TouristPlaces", label: "Tourist Attractions" },
                      { to: "/transport", label: "Transport" },
                    ].map(({ to, label }) => (
                      <li key={to}>
                        <Link
                          to={token ? to : "#"}
                          onClick={(e) => {
                            if (!token) {
                              e.preventDefault();
                              alert("Please login before using services.");
                            } else {
                              handleLinkClick();
                            }
                          }}
                          className="block hover:bg-[#693303] p-2 rounded"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>


              <li>
                <Link
                  to="/about"
                  className="text-primary hover:text-secondary"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-primary hover:text-secondary"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>

              {/* Conditional Login/Logout (Mobile) */}
              <li>
                {token ? (
                  <button
                    onClick={handleLogout}
                    className="text-red-600 font-semibold"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="text-primary hover:text-secondary" onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Decorative Borders */}
      <div className="absolute top-[120px] w-full flex justify-between ">
        <div className="border-t-2 border-[#693303] w-[100%]"></div>
        {/* <div className="border-t-2 border-[#693303] w-[50%]"></div> */}
      </div>
    </header>
  );
};

export default Header;
