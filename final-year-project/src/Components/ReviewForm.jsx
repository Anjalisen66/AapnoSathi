import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if user is logged in
    if (!localStorage.getItem("userToken")) {
      alert("Please log in to submit a review");
      navigate("/login");
      return;
    }
    // Submit review logic
    console.log("Review submitted:", review);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <textarea
        className="w-full p-4 border rounded-lg"
        rows="5"
        placeholder="Enter your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full mt-4 bg-[#652d0e] text-white py-2 rounded-lg hover:bg-[#652d0e]"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
