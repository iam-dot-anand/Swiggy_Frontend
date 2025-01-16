import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SIGNUP_REQUEST } from "../../../Redux/Action/signupAction";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const  result  = useSelector((state) => state.signupReducer);
  console.log("signUp result",  result);
  console.log("signUp result.sucess", result.msg, result.success);
  const dispatch = useDispatch();

  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      toast.error("Please fill in all fields!");
      return;
    } else {
      dispatch(SIGNUP_REQUEST(signUpInfo));
    }

    // Show loading toast
    // toast.info("Signing up...");

    // Check signup result from the state
    
    if (result.success === true) {
      toast.success(result.msg);
    } else if(result.success === false){
      toast.error(result.msg);
    }
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const SignUp = () => {
//   const [signUpInfo, setSignUpInfo] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedInfo = { ...signUpInfo, [name]: value };
//     setSignUpInfo(updatedInfo);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password } = signUpInfo;
//     if (!name || !email || !password) {
//       return toast.error("Please fill in all fields!");
//     }

//     try {
//       const url = "http://localhost:4000/auth/signUp";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signUpInfo),
//       });
//       const result = await response.json();
//       console.log(result);
//       const { success, msg, error } = result;
//       if (success) {
//         toast.success(msg);
//         navigate('/');
//       } else if (error) {
//         const errMsg = error[0].message;
//         toast.error(errMsg);
//       }
//     } catch (err) {
//       toast.error(`Error: ${err.message || "Something went wrong"}`);
//     }
//   };

//   return (
//     <div>
//       <form className="my-4" onSubmit={handleSubmit}>
//         <div className="border">
//           <input
//             onChange={handleChange}
//             name="name"
//             className="w-100 p-4 border-muted border-0 border-bottom focus"
//             type="text"
//             placeholder="Your Name"
//             value={signUpInfo.name}
//           />
//           <input
//             onChange={handleChange}
//             name="email"
//             className="w-100 p-4 border-muted border-0 border-bottom focus"
//             type="email"
//             placeholder="Your Email"
//             value={signUpInfo.email}
//           />
//           <input
//             onChange={handleChange}
//             name="password"
//             className="w-100 p-4 border-muted border-0 focus"
//             type="password"
//             placeholder="Create Password"
//             value={signUpInfo.password}
//           />
//         </div>

//         <button
//           className="border border-muted w-100 p-3 mt-4 orange fw-bold"
//           type="submit"
//         >
//           <span className="text-white">SIGN UP</span>
//         </button>
//         <p>
//           By clicking on Sign Up, I accept the{" "}
//           <span className="text-dark fw-medium">
//             Terms & Conditions & Privacy Policy
//           </span>
//         </p>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;
