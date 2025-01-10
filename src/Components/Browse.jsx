import React from "react";
import Header from "./Header";
// import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Browse = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("sign Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-center ">
      <Header />
      <div className="flex ml-[60%] gap-4 mt-[30px] justify-center items-center z-10 hover:underline">
        <div>
          <img src={user?.photoURL} alt="" className="rounded-[50%] w-12" />
        </div>
        <div className="rounded-[100%] w-12 bg-red-600">
          <p className="text-center w-[100%]">{user?.displayName}</p>
        </div>
        <div className="hover:underline">
          <button className="font-bold   " onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Browse;
