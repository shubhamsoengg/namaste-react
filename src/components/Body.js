import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Body() {
  const [originalResList, setOriginalResList] = useState([]);
  const [restaurantList, setRestaurantlist] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(SWIGGY_API);
    const restaurantData = await response.json();
    setRestaurantlist(
      restaurantData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setOriginalResList(
      restaurantData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const updateRestaurantList = (searchInfo) => {
    console.log(searchInfo);
    const updatedResList = originalResList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInfo.toLowerCase())
    );
    setRestaurantlist(updatedResList);
  };

  return restaurantList.length === 0 ? (
    <>Shimmer UI...</>
  ) : (
    <div className="app-body">
      <div className="searchbar">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => updateRestaurantList(searchText)}
        >
          Search
        </button>
      </div>
      <div className="resturant-container">
        {restaurantList.map((restaurant) => {
          return (
            <Link
              to={"restaurantMenu/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
