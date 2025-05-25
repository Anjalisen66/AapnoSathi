import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Overview from "./Components/Overview";
import InfoSection from "./Components/InfoSection";
import Features from "./Components/Features";
import JodhpurGallery from "./Components/JodhpurGallery";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import TestimonialSlider from "./Components/TestimonialSlider";
import ReviewForm from "./Components/ReviewForm";
import AboutUs from "./Components/AboutUs"; // Import the AboutUs component
import JodhpurRiShaan from "./Components/JodhpurRiShaan";
import Why from "./Components/Why";
import HexagonGrid from "./Components/Hexagongrid";
import SignUp from "./Components/SignUp";
import TouristPlaces from "./Components/TouristPlaces";
import MehrangarhFort from "./Components/Services/MehrangarhFort";
import UmaidBhawan from "./Components/Services/UmaidBhawan";
import MandoreGarden from "./Components/Services/MandoreGarden";
import ItineraryPage from "./Components/Services/ItineraryPage";
import FoodPage from "./Components/Services/FoodPage.jsx";
import Transport from "./Components/Services/Transport.jsx";
import CityInfo from "./Components/Services/CityInfo.jsx";
import Accommodation from "./Components/Services/Accommodation.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
import ReacrCollage from "./Components/ReacrCollage.jsx";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Get the current route path

  // Check if the current path is the home route or about page
  const showHeaderFooterRoutes = [
    "/",
    "/about",
    "/contact",
    "/login",
    "/review",
    "/signup",
    "/TouristPlaces",
    "/foodpage",
    "/itinerary",
    "/why",
    "/honeycomb",
    "/transport",
    "/city-info",
    "/place/mehrangarh-fort",
    "/place/UmaidBhawan",
    "/place/mandore-gardens",
    "/accommodation",
  ];
  const isHomeOrAbout = showHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="bg-[#edeecb] min-h-screen overflow-x-hidden">
      {/* Conditionally render Header and Footer on home and about routes */}
      {isHomeOrAbout && <Header />}

      {/* Define Routes */}
      <Routes>
        {/* Home Page (default route) */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Overview />
              <InfoSection />
              <Features />
              {/* <JodhpurGallery /> */}
              <JodhpurRiShaan />
              <TestimonialSlider />
            </>
          }
        />

        {/* About Us Page Route */}
        <Route path="/about" element={<AboutUs />} />

        {/* Login Page Route */}
        <Route path="/login" element={<LoginForm />} />

        {/* Contact Us Page Route */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Review Form Route */}
        <Route path="/review" element={<ReviewForm />} />

        {/* <Route path="/gallery" element={<JodhpurRiShaan/>} /> */}

        <Route path="/why" element={<Why />} />
        <Route path="/honeycomb" element={<HexagonGrid />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tourist-places" element={
          <ProtectedRoutes>
            <TouristPlaces />
          </ProtectedRoutes>

        } />
        <Route path="/place/mehrangarh-fort" element={
          <ProtectedRoutes>
            <MehrangarhFort />
          </ProtectedRoutes>} />
        <Route path="/place/UmaidBhawan" element={
          <ProtectedRoutes>
            <UmaidBhawan />
          </ProtectedRoutes>} />
        <Route path="/place/mandore-gardens" element={
          <ProtectedRoutes>
            <MandoreGarden />
          </ProtectedRoutes>
        } />
        <Route path="/itinerary" element={
          <ProtectedRoutes>
            <ItineraryPage />
          </ProtectedRoutes>

        } />
        <Route path="/foodpage" element={
          <ProtectedRoutes>
            <FoodPage />
          </ProtectedRoutes>} />
        <Route path="/transport" element={
          <ProtectedRoutes>
            <Transport />
          </ProtectedRoutes>} />
        <Route path="/city-info" element={
          <ProtectedRoutes>
            <CityInfo />
          </ProtectedRoutes>} />
        <Route path="/accommodation" element={
          <ProtectedRoutes>
            <Accommodation />
          </ProtectedRoutes>} />
        {/* <Route path="/scrollComponent" element={<ScrollComponent />} /> */}
        {/* <Route path="/tourism" element={<TouristAttraction />} /> */}
        <Route path="/TouristPlaces" element={
          <ProtectedRoutes>
            <TouristPlaces />
          </ProtectedRoutes>} />
                  <Route path="/collage" element={<ReacrCollage />} />

      </Routes>

       
      {/* Conditionally render Footer on home and about routes */}
      {isHomeOrAbout && <Footer />}
    </div>
  );
}

export default App;
