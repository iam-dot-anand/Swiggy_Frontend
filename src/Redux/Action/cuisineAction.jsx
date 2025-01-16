import { Restaurants } from "../../Pages/Restaurant/Restaurants";

export const CuisineByID = (id, restaurantName) => {
  console.log("CuisineByID Action called", id);
  return {
    type: "CuisineByID",
    RestaurantDetails: {
      id,
      restaurantName,
    },
  };
};
