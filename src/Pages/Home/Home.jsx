import { YourMind } from "../../Component/Carosuels/YourMind";
import { TopRestaurant } from "../../Component/Carosuels/TopRestaurant";
import NearMe from "../../Component/NearMe/NearMe";
import { CityName } from "../../Component/NearMe/CityName";
import { Cuisines } from "../../Component/NearMe/Cuisines";
import "react-toastify/dist/ReactToastify.css";
import { Restaurants } from "../Restaurant/Restaurants";


export const Home = () => {
  return (
    <div className="container px-5 pt-4">
      <YourMind />
      <TopRestaurant />
      <Restaurants/>
      <NearMe neardata={CityName} nearCuisines={Cuisines} />
    </div>
  );
};
