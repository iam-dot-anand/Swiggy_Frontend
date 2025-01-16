import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const   DescData = ({ items, index }) => {
  const [show, hide] = useState(false);
  function setshow() {
    hide(!show);
  }
  return (
    <div key={items.id}>
      <div
        className="d-flex justify-content-between align-item-center fs-6"
        onClick={setshow}
      >
        <p className="cursor orange-hover">{items.desc}</p>
        {show ? (
          <MdOutlineKeyboardArrowUp className="fs-3 text-black-50" />
        ) : (
          <MdOutlineKeyboardArrowDown className="fs-3 text-black-50" />
        )}
      </div>
      <div className="" style={{ display: show ? "block" : "none" }}>
        {Array.isArray(items.subdesc) ? (
          items.subdesc.map((item, idx) => (
            <p key={idx} className="text-black-50">
              {item}
            </p>
          ))
        ) : (
          <p className="">{items.subdesc}</p>
        )}
        {items.btn ? (
          <button className="text-orange border-orange fw-bold ">
            {items.btn}
          </button>
        ) : null}
        {items.link ? <a href="/" className="text-orange" style={{textDecoration:"none"}}> {items.link}</a> : null}
        <br />
        {items.spam ? (
          <span className="Hdark text-black-50">{items.spam}</span>
        ) : null}
      </div>
      <hr className="mt-0 text-black-50" />
    </div>
  );
};

export default DescData;
