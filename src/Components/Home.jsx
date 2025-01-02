import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-screen h-screen   ">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
        alt="background-image"
        className="w-screen h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 "></div>
    </div>
  );
};

export default Home;
