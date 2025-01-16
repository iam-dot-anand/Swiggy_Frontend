import React from "react";
import "./Help.css";
import { Link, Outlet } from "react-router-dom";

function Help() {
  return (
    <div className="bgColor f-height p-5">
      <h2 className="mx-5 text-light fw-bold">Help & Support</h2>
      <p className="mx-5 text-light">
        Let's take a step ahead and help you better.
      </p>
      <div className="row bg-light p-5 gap-5">
        <div className="col-md-auto bg-body-secondary p-4 pe-0 ">
          <Link to={""} className="Hdark pe-5 p-4 listStyle bg-light">
            Partner Onboarding
          </Link>
          <Link to={"legal"} className="Hdark pe-5 p-4 listStyle bg-light">
            Legal
          </Link>
          <Link to={"faq"} className="Hdark pe-5 p-4 listStyle bg-light">
            FAQs
          </Link>
          <Link to={"instamart_Onboarding"} className="Hdark pe-5 p-4 listStyle bg-light">
            Instamart Onboarding
          </Link>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Help;
