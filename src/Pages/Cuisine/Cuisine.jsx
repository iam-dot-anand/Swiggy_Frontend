import React, { useEffect, useState } from "react";
import "./Cuisine.css";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveToCart } from "../../Redux/Action/action";
import { ToastContainer, toast } from "react-toastify";

const Cuisine = () => {
  const { productById, restaurantName } = useSelector(
    (state) => state.CuisineData
  );
  const { loginReducer } = useSelector((state) => state);

  const dispatch = useDispatch();
  function addInCart(item) {
    if (loginReducer.success) {
      dispatch(AddToCart(item));
    } else {
      toast.warn("Please Login");
    }
  }

  return (
    <div className="container px-5">
      <p className="fw-bold fs-4 mb-0">{`Restaurant: ${restaurantName}`}</p>
      <hr className="mb-4"></hr>
      <div className=" ">
        {productById.map((item) => (
          <div key={item.id} className="d-flex mb-5">
            <div className="ms-2 width_80">
              <p className="mb-0 fw-bold">{item.foodName}</p>
              <p className="mb-0 gap-2 d-flex rating fw-bolder">
                <span className="bg-success fs-6 text-light p-1 rounded-circle d-flex">
                  <TiStarFullOutline />
                </span>
                {item.rating}
              </p>
              <p className="mb-0 fw-bold">Price: {item.foodPrice}</p>
              <p className="mb-0 text-secondary">{item.foodDescription}</p>

              {/* <button onClick={() => dispatch(RemoveToCart(item.id))}>Remove from cart</button> */}
            </div>
            <div className="d-flex text-center flex-column w-20">
              <img
                src={item.foodImg}
                alt={item.foodName}
                className="cuisine_img rounded"
              />
              <button
                className="btn border border-secondary rounded bg-light text-success"
                onClick={() => addInCart(item)}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-0"></hr>
      <ToastContainer />
    </div>
  );
};

export default Cuisine;
