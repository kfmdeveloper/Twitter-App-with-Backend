import React from "react";
import Avatar from "react-avatar";
import { AiOutlinePicture } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import CreateTweett from "./CreateTweett";
const CreateTweet = () => {
  return (
    <div className="">
      <div className="d-flex  justify-content-between align-items-center  ">
        <NavLink
          to={"/"}
          className="Nav-Link  plain1 p-2  text-center w-50 fw-medium "
        >
          For You
        </NavLink>
        <NavLink
          to={"/following"}
          className="Nav-Link plain2 p-2  text-center w-50 fw-medium"
        >
          Following
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default CreateTweet;
