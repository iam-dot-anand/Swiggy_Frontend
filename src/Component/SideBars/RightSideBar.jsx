import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Login from "./Login_SignUp/Login";
import SignUp from "./Login_SignUp/SignUp";
import { useSelector } from "react-redux";

export const RightSideBar = ({ hideLogin, signUpToggle }) => {
  const { loginReducer } = useSelector((state) => state);
  const [signUp, setSignUp] = useState(false);
  const toggle = () => {
    setSignUp(!signUp);
  };
  if(loginReducer.success){
    hideLogin();
  }

  
  return (
    <div
      className="d-flex flex-column px-5 py-2 toggle text-muted"
      onClick={(e) => e.stopPropagation()}
      style={{ right: signUpToggle ? "-100%" : "0%" }}
    >
      <div className="my-4 pointer fs-4" onClick={hideLogin}>
        <RxCross1 />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2>{signUp ? "Sign up" : "Login"}</h2>
          <p onClick={toggle} className="mb-0 curser">
            or{" "}
            {signUp ? (
              <span className="text-orange pointer" style={{cursor:"pointer"}}>login to your account</span>
            ) : (
              <span className="text-orange pointer" style={{cursor:"pointer"}}>create an account</span>
            )}
          </p>
          <p className="mb-0">___</p>
        </div>
        <div>
          <img
            style={{ width: "100px", height: "105px" }}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="login_img"
          />
        </div>
      </div>
      {signUp ? <SignUp /> : <Login />}
      
    </div>
  );
};
