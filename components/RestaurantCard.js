import React from "react";

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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant-img"
        className="restaurant-img"
      />
      <h4>{name}</h4>
      <span>Avg rating: {avgRating}</span>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
}
