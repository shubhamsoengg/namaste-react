import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantMenu, restaurantInfo] = useRestaurantMenu(resId);

  return (
    <div>
      <h1>{restaurantInfo.name}</h1>
    </div>
  );
};

export default RestaurantMenu;
