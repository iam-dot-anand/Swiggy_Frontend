import React, { useState } from "react";
import "./Carosule.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

export const TopRestaurant = () => {

  const getRestaurant = useSelector((state) => state.ProductData);
  // console.log("getRestaurant----->",getRestaurant);
  const [slide, setSlides] = useState(0);
  const nextSlide = () => {
        if (slide  < getRestaurant.length) {
            setSlides(slide + 3);
        }
    };

    const prevSlide = () => {
        if (slide > 0) {
            setSlides(slide - 3);
        }
    };

  return (
    <div className="">
      <div className="d-flex justify-content-between mb-2">
        <div className="fw-bold fs-4">Top restaurant chains in Lucknow</div>
        <div className="d-flex gap-3">
          <div className="sliderPointer" onClick={prevSlide} style={{ opacity: slide === 0 ? 0.5 : 1 }} >
            <IoMdArrowBack />
          </div>
          <div className="sliderPointer" onClick={nextSlide} style={{ opacity: slide + 3 >= getRestaurant.length ? 0.5 : 1 }}>
            <IoMdArrowForward />
          </div>
        </div>
      </div>
      <div className="d-flex gap-5 mt-3 " style={{ overflow: "hidden" }}>
        {getRestaurant.map((item, index) => {
          return (
            <div
              className="transDuration"
              style={{ transform: `translateX(-${slide * 100}%)` }}
              key={index}
            >
              <div className="">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-2 mb-2 transition"
                  style={{
                    width: "275px",
                    height: "185px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="text-white fw-bolder fs-3 d-flex justify-content-center"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "2%",
                  fontWeight: "800px",
                }}
              >
                {item.discount}
              </div>
              <div className="ps-2">
                <h5 className="">{item.name}</h5>

                <div className="d-flex align-items-center">
                  <div className="rating d-flex align-items-center">
                    <FaStar className="text-white bg-success p-1 fs-5 rounded-5 me-1" />
                    <span className="fw-bold">
                      {item.rating} {item.time}
                    </span>
                  </div>
                </div>
                <div className="text-muted">{item.restaurantName}</div>
                <div className="text-muted">{item.address}</div>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="my-5"style={{border:"1px solid", backgroundColor:'rgba(2,6,12,0.05)'}}></hr>
    </div>
  );
};
