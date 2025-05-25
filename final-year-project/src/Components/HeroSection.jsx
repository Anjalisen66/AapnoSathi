import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/pexels-abhinav-tripathi-473877923-15774210.jpg";
import CityInfo from "../Components/Services/CityInfo"

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative mt-[-20px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
        className="absolute top-14 left-5 text-4xl sm:text-5xl lg:text-6xl font-serif text-[#502b1d] p-4"
        style={{ fontFamily: "Cinzel Decorative, serif" }}
      >
        JODHPUR
      </h1>

      <div className="absolute bottom-0 w-full bg-[#edeecb] p-6 rounded-t-3xl text-center ">
        <p
          className="text-sm sm:text-lg lg:text-xl text-[#652d0e] p-4 "
          style={{ fontFamily: "Garamond, serif" }}
        >
          Discover Jodhpur with Aapno Sathi — your ultimate guide to exploring
          this vibrant city. From historical forts to local markets, we help
          students settle easily and enjoy everything Jodhpur has to offer.
        </p>
        <button
          onClick={() => navigate("/city-info")}
          className="bg-[#652d0e] text-[#edeecb] py-2 px-6 mt-4 rounded-lg hover:bg-[#652d0eE6] transition hover:text-[#edeecb] transition-colors duration-300 text-sm sm:text-base"
          style={{ fontFamily: "Garamond, serif" }}
        >
          <Link to = "/CityInfo" > Explore City Guide</Link>
         
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
