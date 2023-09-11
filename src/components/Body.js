import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";

export default function Body() {
  return (
    <div className="app-body">
      <div className="searchbar">Search</div>
      <div className="resturant-container">
        {restaurantData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => {
            return (
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            );
          }
        )}
      </div>
    </div>
  );
}
