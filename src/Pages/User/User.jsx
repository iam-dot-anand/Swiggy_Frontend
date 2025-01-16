import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "../../Redux/Action/logoutAction";
import { LOGIN_REQUEST } from "../../Redux/Action/loginAction";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setuserName] = useState("");

  const handleLogOut = () => {
    dispatch(LOGOUT_REQUEST());
    navigate("/");
  };

  useEffect(() => {
    setuserName(localStorage.getItem("userName"));
  });

  return (
    <div className="bgColor p-5 f-height">
      <div className="container px-5 pb-4 text-white d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex align-baseline gap-2">
          <h1 className="fw-semibold mb-0">{userName}</h1>
        </div>
        <div className="">
          <button
            className="orange px-5 py-2 text-light fw-bold border-0"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="bg-light">
        <div className="text-center">
          <h2>History</h2>
        </div>
      </div>
    </div>
  );
};

export default User;
