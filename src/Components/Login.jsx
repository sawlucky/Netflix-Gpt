import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../utils/firebase";
const Login = () => {
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = logindata;
    const isValid = validateData(email, password);
    if (email === "" && password.length === 0) {
      setErrorMessage(
        "🚫 Please enter a valid email address or phone number &Your password must contain between 4 and 60 characters. "
      );
      return;
    }
    if (isValid !== null) {
      setErrorMessage(isValid);
      return;
      // } else {
    } else {
      setErrorMessage(null);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: user.email[0],
            photoURL: "https://avatars.githubusercontent.com/u/89846236?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
              navigate("/error");
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
    }

    console.log(logindata);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Header Component */}
      <Header />

      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
        alt="background-image"
        className="w-screen h-screen object-cover brightness-75"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 flex justify-center items-center">
        {/* Form Container */}
        <div className="bg-black bg-opacity-70 rounded-[5px] p-10 text-white w-[100%] max-w-[400px] shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email or mobile number"
                className="w-full p-3 rounded-md bg-[#141414] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C11119]"
                value={logindata.email}
                onChange={handleChange}
              />
            </div>
            {/* Password Input */}
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 rounded-md bg-[#141414] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C11119]"
                value={logindata.password}
                onChange={handleChange}
              />
              <p className="text-[#C11119]">{errorMessage}</p>
            </div>
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#C11119] hover:bg-red-700 rounded-md text-white font-semibold"
            >
              Sign In
            </button>
            {/* Or Divider */}
            <div className="text-center my-4 text-gray-500 text-sm">OR</div>
            {/* Sign-in Code Button */}
            <button
              type="button"
              className="w-full py-3 bg-[#2F3030] hover:bg-gray-600 rounded-md text-white font-semibold"
            >
              Use a sign-in code
            </button>
            {/* Forgot Password */}
            <div className="mt-4 text-sm text-center">
              <Link
                to="#"
                className="text-white brightness-125 hover:underline hover:text-white"
              >
                Forgot Password?
              </Link>
            </div>
            {/* Remember Me and Signup */}
            <div className="flex items-center justify-between mt-6 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-red-600" />
                Remember me
              </label>
            </div>
            <div className="mt-6 text-sm">
              New to Netflix?
              <Link to="/" className="text-red-500 p-1 hover:underline">
                Signup now
              </Link>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Link to="#" className="text-blue-500 hover:underline">
                Learn more.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
