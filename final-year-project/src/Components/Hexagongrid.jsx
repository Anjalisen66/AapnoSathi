import React from "react";
import "./HexagonGrid.css";
import img1 from "../assets/blue-city-jodhpur.jpg";
import img2 from "../assets/56873738.jpg";
import img3 from "../assets/mehrangarh-fort-jodhpur.jpg";
import img4 from "../assets/mehrangarh-fort-jodhpur.jpg";
import img5 from "../assets/mehrangarh-fort-jodhpur.jpg";
import img6 from "../assets/mehrangarh-fort-jodhpur.jpg";
import img7 from "../assets/blue-city-jodhpur.jpg";
import img8 from "../assets/56873738.jpg";
import img9 from "../assets/mehrangarh-fort-jodhpur.jpg";
import img10 from "../assets/mehrangarh-fort-jodhpur.jpg";
import img11 from "../assets/mehrangarh-fort-jodhpur.jpg";
import img12 from "../assets/mehrangarh-fort-jodhpur.jpg";

const HexagonGrid = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img10, img10, img11, img12, img12,img12, img12, img12,img12,img12,img12,img12,img12,img12,img12,img12,img12];
  const rows = 2;
  
  return (
    <div className="honeycomb-grid">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`honeycomb-row ${rowIndex % 2 === 1 ? "offset-row" : ""}`}
        >
          {images.map((image, index) => (
            <div key={index} className="hexagon">
              <div className="hex-inner">
                <div
                  className="hex-background"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonGrid;
