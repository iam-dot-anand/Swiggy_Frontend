import React from "react";
import { CiGps } from "react-icons/ci";
import { RxCountdownTimer, RxCross1 } from "react-icons/rx";

const LeftSideBar = ({ hideLeftSideMenu, leftToggle }) => {
  return (
    <div
      className="toggle p-5 text-muted"
      onClick={(e) => e.stopPropagation()}
      style={{ left: leftToggle ? "0%" : "-100%" }}
    >
      <div className="my-4" style={{ cursor: "pointer" }}>
        <RxCross1 onClick={hideLeftSideMenu} />
      </div>
      <div className="my-4">
        <input
          className="w-100 p-3 border-muted"
          type="text"
          placeholder="Search for area, street name.."
        />
      </div>
      <div className="d-flex align-items-baseline gap-2 border border-muted my-4 p-3">
        <div className="fs-4">
          <CiGps />
        </div>
        <div>
          <span className="list">Get current location</span>
          <br />
          <span className="text-muted">Using GPS </span>
        </div>
      </div>
      <div className="border border-muted p-3">
        <div className="ps-4">
          <p>RECENT SEARCH</p>
        </div>
        <div className="d-flex align-items-baseline gap-2 ">
          <div className="">
            <RxCountdownTimer />
          </div>
          <div>
            <span className="list">Lucknow </span>
            <br />
            <span>Uttar Prasesh, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
