import React from "react";
import "./Footer.css";
import { SiSwiggy } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaLinkedin ,  FaInstagram, FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-box px-5 mt-5">
      {/* <div className="footer-content-box border-top border-2 border-warning"> */}

      <div className="d-flex justify-content-between pb-5 pt-4">
        <div className="fs-4 fw-bold">
          For better experience,download the Swiggy app now
        </div>
        <div className="d-flex">
          <div className="mx-3">
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
              <img
                style={{ height: "64px", width: "208px" }}
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt="google_play"
              />
            </a>
          </div>
          <div className="mx-3">
            <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
              <img
                style={{ height: "64px", width: "208px" }}
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                alt="app_store"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="container px-5 mt-5 ">
        <div class="row align-items-start gap-4">
          <div class="col">
            <div class="d-flex gap-3 pb-2 me-5">
              <span
                className="text-light pb-1 rounded-4 fs-2 orange text-center"
                style={{ width: "50px" }}
              >
                <SiSwiggy />
              </span>
              <span className="text-orange fs-2 fw-bolder">Swiggy</span>
            </div>
            <div className="">© 2024 Swiggy Limited</div>
          </div>
          <div class="col ">
            <ul className="list-style text-muted">
                <li className="fw-bolder mb-2 text-dark">Company</li>
                <li className="mb-2">About Us</li>
                <li className="mb-2">Swiggy Corporate</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Team</li>
                <li className="mb-2">Swiggy One</li>
                <li className="mb-2">Swiggy Instamart</li>
                <li className="mb-2">Swiggy Dineout</li>
                <li className="mb-2">Swiggy Genie</li>
            </ul>
          </div>
          <div class="col">
          <ul className="list-style text-muted mb-5 pb-5">
                <li className="fw-bolder mb-2 text-dark">Contact us</li>
                <li className="mb-2">Help & Support</li>
                <li className="mb-2">Partner with us Corporate</li>
                <li className="mb-2">Ride with us</li>
            </ul>
          <ul className="list-style text-muted">
                <li className="fw-bolder mb-2 text-dark">Legal</li>
                <li className="mb-2">Terms & Conditions</li>
                <li className="mb-2">Coockie Policy</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Investor Relations</li>
            </ul>
          </div>
          <div class="col">
          <ul className="list-style text-muted">
                <li className="fw-bolder mb-2 text-dark">Available in:</li>
                <li className="mb-2">Bangalore</li>
                <li className="mb-2">Gurgaon</li>
                <li className="mb-2">Hyderabad</li>
                <li className="mb-2">Delhi</li>
                <li className="mb-2">Mumbai</li>
                <li className="mb-2">Pune</li>
                <li className="mb-2">
                    <div className="border rounded px-2 d-flex justify-content-between align-items-center">
                        <span>679 cities</span>
                        <MdOutlineKeyboardArrowDown/>
                    </div>
                </li>
                
            </ul>
          </div>
          <div class="col">
          <ul className="list-style text-muted mb-5 pb-5">
                <li className="fw-bolder mb-2 text-dark">Life at Swiggy</li>
                <li className="mb-2">Explore with Swiggy</li>
                <li className="mb-2">Swiggy News</li>
                <li className="mb-2">Snackables</li>
            </ul>
          <ul className="list-style text-muted">
                <li className="fw-bolder mb-2 text-dark">Social Links</li>
                <li className="d-flex gap-3">
                    <div><FaLinkedin/></div>
                    <div><FaInstagram/></div>
                    <div><FaFacebookF/></div>
                    <div><FaPinterest/></div>
                    <div><FaTwitter/></div>
                </li>
                
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
