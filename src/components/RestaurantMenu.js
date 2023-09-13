import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});

  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const restaurantMenuData = await response.json();
    console.log(restaurantMenuData);
    setRestaurantInfo(restaurantMenuData?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      restaurantMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[1]?.card?.card?.itemCards
    );
  };

  return (
    <div>
      <h1>{restaurantInfo.name}</h1>
    </div>
  );
};

export default RestaurantMenu;
