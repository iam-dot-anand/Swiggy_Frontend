import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SIGNUP_REQUEST } from "../../../Redux/Action/signupAction";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const result = useSelector((state) => state.signupReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Listen for signup result changes
  useEffect(() => {
    if (result?.msg) {
      if (result.success) {
        toast.success(result.msg);
        // setTimeout(() => navigate("/user"), 1500);
      } else {
        toast.error(result.msg);
      }
    }
  }, [result, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    dispatch(SIGNUP_REQUEST(signUpInfo));
  };

  return (
    <div>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="border">
          <input
            onChange={handleChange}
            name="name"
            className="w-100 p-4 border-muted border-0 border-bottom focus"
            type="text"
            placeholder="Your Name"
            value={signUpInfo.name}
          />
          <input
            onChange={handleChange}
            name="email"
            className="w-100 p-4 border-muted border-0 border-bottom focus"
            type="email"
            placeholder="Your Email"
            value={signUpInfo.email}
          />
          <input
            onChange={handleChange}
            name="password"
            className="w-100 p-4 border-muted border-0 focus"
            type="password"
            placeholder="Create Password"
            value={signUpInfo.password}
          />
        </div>

        <button
          className="border border-muted w-100 p-3 mt-4 orange fw-bold"
          type="submit"
        >
          <span className="text-white">SIGN UP</span>
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

export default SignUp;
