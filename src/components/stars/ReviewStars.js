import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export const ReviewStars = ({ avgRating = 5 }) => {
  const fullRating = Math.floor(avgRating);
  const maxStar = 5;

  const isHalfStar = isHalfStar
    ? maxStar - fullRating - 1
    : maxStar - fullRating;
  // true or false

  const emptyStar = maxStar - fullRating;

  return (
    <div className="mb-3">
      <span>
        {Array(fullRating)
          .fill("")
          .map((item, i) => (
            <FaStar className="text-warning" />
          ))}
      </span>{" "}
    </div>
  );
};
