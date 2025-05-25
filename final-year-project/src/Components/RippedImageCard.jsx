import React from 'react';
import './RippedImageCard.css'; // Import custom CSS

const RippedImageCard = ({ imageUrl, alt }) => {
  return (
    <div className="relative w-full h-full overflow-hidden ripped-header">
      <img src={imageUrl} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default RippedImageCard;
