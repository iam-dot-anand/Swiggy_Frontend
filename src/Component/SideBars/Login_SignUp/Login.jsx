import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN_REQUEST } from "../../../Redux/Action/loginAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.loginReducer);
  // console.log("loginState:", loginState); 

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [toastField, setToastField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      if (toastField) toast.dismiss(toastField);
      const msg = !email
        ? "Please enter email field!"
        : "Please enter password field!";
      const toastId = toast.error(msg);
      setToastField(toastId);
      return;
    }

    dispatch(LOGIN_REQUEST(loginInfo));
  };

  useEffect(() => {
    console.log("useEffect triggered with loginState:", loginState);
    if (loginState && loginState.msg) {
      if (loginState.success) {
        // alert()
        toast.success("Login successful.", { toastId: "loginSuccess" });
        setTimeout(() => {
          navigate("/");
        }, 1500);
        setLoginInfo({ email: "", password: "" });
      } else {
        // alert("User not exist");
        toast.error("User not exist.", { toastId: "loginError" });
      }
    }
  }, [loginState, navigate]);

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
            placeholder="Your Password"
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
          By clicking on Login, I accept the{" "}
          <span className="text-dark fw-medium">
            Terms & Conditions & Privacy Policy
          </span>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={3000} style={{ zIndex: 9999 }}/>
    </div>
  );
};

export default Login;
