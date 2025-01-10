import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateData } from "../utils/validate";
import Header from "./Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Home = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signUpData;
    const isValid = validateData(email, password);
    if (email === "" && password.length === 0)
      setErrorMessage("🚫 Please enter a valid email address or phone number ");
    if (isValid !== null) {
      setErrorMessage(isValid);
      return;
      // } else
    } else {
      setErrorMessage(null);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
    }
    console.log(signUpData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="relative w-screen h-screen">
      <Header />

      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>

      {/* Sign In Button */}
      <div className="absolute top-4 right-4 z-10">
        <Link to="/login">
          <button className="bg-[#C11119] px-5 py-2 rounded-md text-white font-semibold hover:bg-red-700 transition-colors">
            Sign In
          </button>
        </Link>
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" bg-opacity-75 rounded-lg p-8 text-white w-[90%] max-w-[450px] shadow-xl text-center">
          <h1 className="text-3xl font-bold mb-6 leading-tight">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-base mb-6">
            Starts at ₹149. Cancel at any time. Ready to watch? Enter your email
            and password to create or restart your membership.
          </p>
          <div className="space-y-4">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3  rounded-md bg-[#141414] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C11119]"
                value={signUpData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-md bg-[#141414] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C11119]"
                value={signUpData.password}
                onChange={handleChange}
              />
              <button className="w-full bg-[#C11119] hover:bg-red-700 transition-all text-white py-3 rounded-md font-semibold">
                Get Started
              </button>
            </form>
            <div>{errorMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
