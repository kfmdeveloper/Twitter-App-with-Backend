import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div style={{ width: "30%" }}>
      <div className="   d-flex flex-column p-2 ">
        <div className="px-4 py-1">
          <FaTwitter className=" text-primary " size={"30px"} />
        </div>
        <div className="mt-3 p-1  d-flex flex-column ">
          <NavLink
            to={"/"}
            className=" Nav-Link tabs d-flex px-4 py-2 my-1  align-items-center "
          >
            <AiOutlineHome size={"20px"} />
            <div className="mx-2 fw-bold ">Home</div>
          </NavLink>

          <div className="tabs d-flex px-4 py-2 my-1  align-items-center ">
            <IoSearchSharp size={"20px"} />
            <div className="mx-2 fw-bold ">Explore</div>
          </div>
          <div className="tabs d-flex px-4 py-2 my-1  align-items-center ">
            <IoIosNotificationsOutline size={"25px"} />
            <div className="mx-1 fw-bold ">Notificatons</div>
          </div>
          <NavLink
            to={user ? `/profile/${user?._id}` : "/"} // Ensure user is defined
            className="Nav-Link tabs d-flex px-4 py-2 my-1 align-items-center"
          >
            <CiUser size={"20px"} />
            <div className="mx-2 fw-bold ">Profile</div>
          </NavLink>
          <div className="  tabs d-flex px-4 py-2 my-1  align-items-center ">
            <CiBookmark size={"20px"} />
            <div className="mx-2 fw-bold ">Bookmarks</div>
          </div>
          <div className="tabs d-flex px-4 py-2 my-1  align-items-center ">
            <TbLogout size={"20px"} />
            <div className="mx-2 fw-bold ">Logout</div>
          </div>
        </div>
        <div className="py-2 my-2">
          <button className="tweet">Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
