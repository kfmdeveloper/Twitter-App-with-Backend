import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
const RightSidebar = ({ otherusers }) => {
  return (
    <div className=" d-flex flex-column  px-4  my-1 " style={{ width: "35%" }}>
      <div className="searchbar bg-body-secondary d-flex text-center align-items-center ">
        <CiSearch className=" Cisearch ms-2 " size={"18px"} />
        <input
          type="text"
          className="search  bg-body-secondary"
          placeholder="search"
        />
      </div>
      <div className="WhotoFollow mt-3  d-flex p-2 flex-column w-100 bg-body-secondary my-1 ">
        <p className=" fw-bold ">Who to Follow</p>
        {otherusers?.map((user) => {
          return (
            <div key={user._id} className=" d-flex justify-content-between ">
              <div className="d-flex my-1">
                <div>
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo7ZaOSsDyuxuU-JRRcTiAAzK9xGlUADgYcnv0xSuTA&sz"
                    size="35"
                    round={true}
                    className="me-1"
                  />
                </div>
                <div className="follow d-flex flex-column ">
                  <p className=" fw-medium ">{user?.name}</p>
                  <p className="followp">{`@${user?.username}`}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user?._id}`}>
                  <button className="profilebtn">Profile</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
