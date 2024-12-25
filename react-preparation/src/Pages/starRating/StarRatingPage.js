import React, { useState } from "react";
import "./starRating.css";

const StarRating = ({ maximumNumberOfStars, rating, changeRate }) => {
  let [starActiveTill, setStarActiveTill] = useState(null);

  const checkStartBg = (index) => {
    if (starActiveTill === null) {
      if (index <= rating) {
        return "yellow";
      } else {
        return "none";
      }
    } else {
      if (index > starActiveTill) {
        return "none";
      } else {
        return "yellow";
      }
    }
  };
  return (
    <div>
      {Array(maximumNumberOfStars)
        .fill(null)
        .map((_, index) => {
          return (
            <button
              className="star-btns"
              key={index}
              onMouseEnter={() => setStarActiveTill(index)}
              onMouseLeave={() => setStarActiveTill(null)}
              onClick={() => changeRate(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="star-icon"
                fill={checkStartBg(index)}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
          );
        })}
    </div>
  );
};
const StarRatingPage = () => {
  const [rating, setRating] = useState(2);
  const changeRate = (ind) => {
    setRating(ind);
  };
  return (
    <div>
      <h2> Star Rating Component</h2>
      <StarRating
        maximumNumberOfStars={5}
        rating={rating}
        changeRate={changeRate}
      />
    </div>
  );
};

export default StarRatingPage;
