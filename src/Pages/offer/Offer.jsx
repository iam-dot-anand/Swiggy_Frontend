import React, { useState } from "react";
import "./Offer.css";
import { SiSwiggy } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Filter from "../filter/filter";

function Offer() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(true);
  };
  const offToggle = () => {
    setToggle(false);
  };
  return (
    <>
      <div className="border-bottom">
        <div className="container d-flex p-3 justify-content-between align-items-center gap-5">
          <div class="d-flex">
            <Link to={"/"} className="link">
              <span className="text-light px-2 pb-2 pt-1 me-1 rounded-4 fs-2 orange text-center">
                <SiSwiggy />
              </span>
              <span className="text-orange fs-2 fw-bolder pe-4 border-end">
                Swiggy
              </span>
            </Link>
          </div>
          <div className="d-flex align-items-center gap-1">
            <span className="text-orange fs-5 pb-2">
              <FaLocationArrow />
            </span>
            <span className="fw-bold fs-5">Setup your precise location</span>
            <span className="text-orange fw-bolder fs-5">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="" style={{ width: "36%" }}>
            {toggle ? (
              <div className="d-flex align-items-center w-100 border border-1 p-3 rounded-4  gap-3">
                <FaArrowLeftLong onClick={offToggle} />
                <input
                  type="text"
                  placeholder="Search for restaurant and food"
                  className="d-flex w-100 border border-0"
                />
              </div>
            ) : (
              <button
                className="d-flex justify-content-between w-100 p-3 border border-0 rounded-4"
                onClick={onToggle}
              >
                <span className=" text-muted fw-bolder">
                  Search for restaurant and food
                </span>{" "}
                <LuSearch />
              </button>
            )}
          </div>
          <div>
            <FaUserCircle style={{ fontSize: "50px" }} />
          </div>
        </div>
      </div>
      <div className="container px-5">
          <div className="fw-bold fs-4">Restaurants With Great Offers Near Me</div>
          <Filter/>
      </div>
    </>
  );
}

export default Offer;
