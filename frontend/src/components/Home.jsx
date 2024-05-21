import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetOtherusers from "../Hooks/OtherusersHook";
const Home = () => {
  const { user, otherusers } = useSelector((store) => store.user);
  useGetOtherusers(user?._id);
  return (
    <div className=" d-flex container justify-content-between   h-100 ">
      <LeftSidebar />
      <Outlet />
      <RightSidebar otherusers={otherusers} />
    </div>
  );
};

export default Home;
