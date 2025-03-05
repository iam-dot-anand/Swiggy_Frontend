import React, { useEffect } from "react";
import "./Restaurant.css";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { ProductToCart } from "../../Redux/Action/productAction";
import { CuisineByID } from "../../Redux/Action/cuisineAction";
import Filter from "../filter/filter";
// import Cuisine from "../Cuisine/Cuisine";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

export const Restaurants = () => {
  const getRestaurant = useSelector((state) => state.ProductData);
  console.log("getRestaurant",getRestaurant);
  //   const getCuisine = useSelector((state) => state.CuisineData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductToCart());
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="fw-bold fs-4">
          Restaurants with online food delivery in Lucknow
        </div>
      </div>
      <Filter />
      <div className="mapped-data">
        {getRestaurant?.length > 0 ? (
          getRestaurant?.map((item) => (
            <Link
              to={"/cuisine"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                key={item.id}
                className="cards"
                onClick={() =>
                  dispatch(CuisineByID(item._id, item.restaurantName))
                }
              >
                <img src={item.image} alt="" className="" />
                <div className="ms-2">
                  <p className="mb-0 fw-bold">{item.restaurantName}</p>
                  <p className="mb-0 gap-2 d-flex rating fw-bolder">
                    <span className="bg-success fs-6 text-light p-1 rounded-circle d-flex">
                      <TiStarFullOutline />
                    </span>
                    {item.rating}
                  </p>
                  <p className="mb-0 text-secondary">{item.desc}</p>
                  <p className="mb-0 text-secondary">{item.address}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <HashLoader className="loader " loading={true} color="#fd7e14" />
        )}
      </div>
      <hr></hr>
    </div>
  );
};
