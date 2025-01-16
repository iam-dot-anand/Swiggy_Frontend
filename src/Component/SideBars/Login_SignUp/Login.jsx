import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN_REQUEST } from "../../../Redux/Action/loginAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logedIn = useSelector((state) => state.loginReducer);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  let toastField = undefined;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInfo = { ...loginInfo, [name]: value };
    setLoginInfo(updatedInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      if (toastField) toast.dismiss(toastField);
      !email
        ? showTost("Please enter email fields!")
        : showTost("Please enter password fields!");
      // console.log(toast.dismiss(toastField),'toast')
      return;
    } else {
      dispatch(LOGIN_REQUEST(loginInfo));
      setLoginInfo({
        email: "",
        password: "",
      });
    }
  };
  const showTost = (message) => {
    toastField = toast.error(message);
  };

  return (
    <div>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="border">
          <input
            onChange={handleChange}
            name="email"
            className="w-100 p-4 border-muted border-0 border-bottom focus"
            type="email"
            placeholder="Your Email"
            value={loginInfo.email}
          />
          <input
            onChange={handleChange}
            name="password"
            className="w-100 p-4 border-muted border-0 focus"
            type="password"
            placeholder="Create Password"
            value={loginInfo.password}
          />
        </div>
        <button
          className="border border-muted w-100 p-3 mt-4 orange fw-bold"
          type="submit"
        >
          <span className="text-white">LOGIN</span>
        </button>
        <p>
          By clicking on Sign Up, I accept the{" "}
          <span className="text-dark fw-medium">
            Terms & Conditions & Privacy Policy
          </span>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
