import React from "react";
import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({
  cloudinaryImageId,
  isOpen,
  name,
  avgRating,
  cuisines,
}) {
  console.log(cuisines);
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-img"
        className="restaurant-img"
      />
      <h4>{name}</h4>
      <span>Avg rating: {avgRating}</span>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
}
