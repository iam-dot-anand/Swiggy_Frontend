  import React, { useEffect, useState } from "react";
  import "./Navbar.css";
  import { SiSwiggy } from "react-icons/si";
  import { MdOutlineKeyboardArrowDown } from "react-icons/md";
  import { FaTv } from "react-icons/fa6";
  import { FiSearch } from "react-icons/fi";
  import { RiDiscountPercentLine } from "react-icons/ri";
  import { IoHelpBuoyOutline } from "react-icons/io5";
  import { FaRegUser } from "react-icons/fa";
  import { FiShoppingCart } from "react-icons/fi";
  import { Link } from "react-router-dom";
  import { RightSideBar } from "../SideBars/RightSideBar";
  import { LuMenu } from "react-icons/lu";
  import { useSelector } from "react-redux";

  export default function Navbar() {
    const { cartData, loginReducer } = useSelector((state) => state);
    console.log("logedIn data", loginReducer);

    const [logedInName, setLogedInName] = useState("");

    useEffect(() => {
      setLogedInName(localStorage.getItem("userName"));
    });
  console.log("logedIn data", logedInName);
    const [leftToggle, setRightToggle] = useState(false);
    const [signUpToggle, setSignUpToggle] = useState(true);
    const [menu, setMenu]=useState(false);

    const showLeftSideMenu = () => {
      setRightToggle(true);
    };
    const hideLeftSideMenu = () => {
      setRightToggle(false);
    };
    const showRightSideMenu = () => {
      setSignUpToggle(false);
    };
    const hideRightSideMenu = () => {
      setSignUpToggle(true);
    };
    const handleMenue=()=>{
      setMenu(!menu);
    }

    const navLink = [
      {
        logo: <FaTv />,
        name: "Swiggy Corporate",
      },
      {
        logo: <FiSearch />,
        name: "Search",
      },
      {
        logo: <RiDiscountPercentLine />,
        name: "Offer",
        sup: "NEW",
      },
      {
        logo: <IoHelpBuoyOutline />,
        name: "Help",
      },
      {
        logo: <FaRegUser />,
        name: "Sign In",
      },
      {
        logo: <FiShoppingCart />,
        name: "Cart",
        sup: cartData.length,
      },
    ];


    

    return (
      <>
        {/* Left SideBar */}
        <div
          className="w-100 position-fixed z-1"
          onClick={hideLeftSideMenu}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            height: "100%",
            opacity: leftToggle ? 1 : 0,
            visibility: leftToggle ? "visible" : "hidden",
          }}
        >
          <div
            className="toggle p-5 text-muted"
            onClick={(e) => e.stopPropagation()}
            style={{ left: leftToggle ? "0%" : "-100%" }}
          >
            {/* Sidebar content */}
          </div>
        </div>

        {/* Right SideBar --> Login --> SignUp */}
        {!signUpToggle && (
          <div
            className="w-100 position-fixed z-1"
            onClick={hideRightSideMenu}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              height: "100%",
              opacity: signUpToggle ? 0 : 1,
              visibility: signUpToggle ? "hidden" : "visible",
            }}
          >
            <RightSideBar hideLogin={hideRightSideMenu} showLogin={signUpToggle} />
          </div>
        )}

        <div className="bgc bg-white">
          <div className="container navbar-container">
            <div className="d-flex gap-4" style={{ alignItems: "center" }}>
              <div className="text-light rounded-4 fs-2 px-2 pb-1 orange">
                <Link to={"/"} style={{ color: "white" }}>
                  <SiSwiggy />
                </Link>
              </div>
              <div className="">
                <a className="text-orange fs-5" href="###">
                  Other
                </a>
                Lucknow, U.P, India
                <span
                  className="text-orange fs-4 cursor"
                  style={{ cursor: "pointer" }}
                  onClick={showLeftSideMenu}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </div>

            <div className="menue" ><LuMenu onClick={handleMenue} /></div>
            <div className={`nav-links  ${menu ? 'showNav':'hideNav'}`}>
              <li className="list align">
                <Link className="align gap-2">
                  {navLink[0].logo} Swiggy Corporate
                </Link>
              </li>
              <li className="list align">
                <Link className="align gap-2" to={"/search"}>
                  {navLink[1].logo} {navLink[1].name}
                </Link>
              </li>
              <li className="list align">
                <Link className="align gap-2" to={"/offer"}>
                  {navLink[2].logo}Offer
                </Link>
                <sup style={{ color: "#ffa700" }}>{navLink[2].sup}</sup>
              </li>
              <li className="list align">
                <Link className="align gap-2" to={"/help"}>
                  {navLink[3].logo} {navLink[3].name}
                </Link>
              </li>
              {logedInName ? (
                <li className="list align">
                  <Link className="align gap-2" to={"/user"}>
                    {navLink[4].logo} {logedInName}
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={showRightSideMenu}>
                  <Link className="align gap-2">
                    {navLink[4].logo} {navLink[4].name}
                  </Link>
                </li>
              )}
              <li className="list align">
                <Link className="align gap-2" to={"/cart"}>
                  {navLink[5].logo} {navLink[5].name}
                </Link>
                <sup style={{ color: "#ffa700" }} className="fs-6">
                  {navLink[5].sup}
                </sup>
              </li>
            </div>
          </div>
        </div>
      </>
    );
  }
