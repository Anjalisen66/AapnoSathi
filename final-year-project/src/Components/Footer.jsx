import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import flowerDesign from "../assets/Mediamodifier-Design-Template-removebg-preview.png";
import logo from "../assets/logo-removebg.png";

const Footer = () => {
  return (
    <div
      className="bg-[#edeecb] text-[#7a3b1c] p-6 sm:p-8 md:p-12"
      style={{ fontFamily: "Garamond, serif", position: "relative" }}
    >
      <div className="border-t-4 border-[#814b19] absolute left-0 right-0 top-0 mb-8"></div>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start items-center space-y-8 md:space-y-0">
        <div className="max-w-full md:max-w-200 text-center md:text-left">
          <img src={logo} alt="logo" className="mb-4 h-24 md:h-32 w-auto mx-auto md:ml-10" />
          <p className="text-md font-medium md:ml-6">
            नवीन शहर, सहज रहवास <br />
            छात्रां खातिर सब कुछ एक ठाँव
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-12 md:gap-32 justify-center w-full md:w-auto text-center md:text-left">
          <div style={{ fontFamily: "Garamond, serif" }} className="w-full sm:w-auto">
            <p className="text-lg text-[#7a3b1c] font-semibold">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-md font-medium">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/contact">FAQ</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          <div style={{ fontFamily: "Garamond, serif" }} className="w-full sm:w-auto">
            <p className="text-lg text-[#7a3b1c] font-semibold">SERVICES</p>
            <ul className="mt-3 flex flex-col gap-2 text-md font-medium">
              <li><a href="/accommodation">Accommodation</a></li>
              <li><a href="/city-info">City Info</a></li>
              <li><a href="/tourist-places">Tourist Places</a></li>
              <li><a href="/food">Food & Restaurants</a></li>
              <li><a href="/transport">Transport</a></li>
            </ul>
          </div>

          <div className="max-w-full sm:max-w-80 w-full sm:w-auto">
            <p className="text-lg text-[#7a3b1c] font-semibold">STAY UPDATED</p>
            <p className="mt-3 text-md font-medium">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center mt-4 w-full max-w-xs mx-auto sm:mx-0">
              <input
                type="text"
                className="flex-1 bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
                placeholder="Your email"
              />
              <button className="flex items-center justify-center bg-[#7a3b1c] h-9 w-9 aspect-square rounded-r">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
              {/* Instagram */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
              </svg>
              {/* Facebook */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
              </svg>
              {/* Twitter */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
              </svg>
              {/* LinkedIn */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#7a3b1c] mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center pb-0 font-medium text-center">
        <p><b>©</b> {new Date().getFullYear()} <b>aapnosathi</b>. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
