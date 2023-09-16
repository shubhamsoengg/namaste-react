import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_MENU_URL + resId);
    const restaurantMenuData = await response.json();
    console.log(restaurantMenuData);
    setRestaurantInfo(restaurantMenuData?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      restaurantMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[1]?.card?.card?.itemCards
    );
  };
  return [restaurantMenu, restaurantInfo];
};
export default useRestaurantMenu;
