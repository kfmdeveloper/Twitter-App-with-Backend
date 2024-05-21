import React, { useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import Avatar from "react-avatar";
// import { useSelector } from "react-redux";
import useGetProfile from "../Hooks/ProfileHook.jsx";

const Profile = () => {
  const { id } = useParams(); // Importing useParams correctly
  useGetProfile(id);

  return (
    <div style={{ width: "60%" }}>
      <div className="d-flex my-2">
        <NavLink to={"/"} className="back me-4">
          <IoArrowBackCircle color="blue" size={"40"} />
        </NavLink>
        <div className="">
          <h3>kk</h3>
          <div className="ProfilePosts">
            <p className="">j</p>
          </div>
        </div>
      </div>

      <div>
        <img
          width={"520"}
          src="https://www.edx.org/contentful/ii9ehdcj88bc/6mXSkgC4jNaRA3vavFdmGj/42c4e5d6d672558dab45578bc43eda60/top-programming-langauges-data-science.jpg?w=1600&q=50&fm=webp"
          alt="background-Image"
          className="rounded-1 "
        />
      </div>
      <div>
        <div className="d-flex flex-column justify-content-between ">
          <Avatar
            src="https://i.pinimg.com/236x/af/d0/9a/afd09aff43f9d77116b02d9ab4940ccb.jpg"
            size="100"
            round={true}
            className="b1 ms-3 "
          />
          <div className="profileBtn">
            <button className="">Edit Profile</button>
          </div>
          <div>
            <h5>kkk</h5>
            <p className="profileUsername">@kk</p>
            <p className="profilePara">kk</p>
          </div>
          <div>
            <div className="ProfileTabs d-flex justify-content-evenly p-2 mb-2  ">
              <div>Posts</div>
              <div>Likes</div>
              <div>Photos</div>
              <div>HighLights</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
