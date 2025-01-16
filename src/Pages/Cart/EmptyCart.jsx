import React from "react";
import { useNavigate } from "react-router-dom";


const EmptyCart = () => {
    const navigate = useNavigate();
    function GoHome(){
        navigate("/")
    }
  return (
    
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="d-flex flex-column align-items-center gap-3">
        <img
          className="w-50"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="empty_img"
        />
        <h2 className="fs-5 fw-bold text-secondary mb-0">Your cart is empty</h2>
        <p style={{fontSize:"small"}} className="text-black-50">You can go to home page to view more restaurants</p>
        <button className="border-0 px-4 py-2 fw-bolder text-light orange" onClick={GoHome}>SEE RESTAURANTS NEAR YOU</button>
      </div>
    </div>
  );
};

export default EmptyCart;
