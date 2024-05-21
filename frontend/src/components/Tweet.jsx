import React from "react";
import Avatar from "react-avatar";
import { FaRegHeart } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
const Tweet = () => {
  return (
    <div className="Tweet p-2   ">
      <div className=" p-2 d-flex">
        <div className=" ms-2 ">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo7ZaOSsDyuxuU-JRRcTiAAzK9xGlUADgYcnv0xSuTA&sz"
            size="35"
            round={true}
            className=""
          />
        </div>
        <div className="">
          <div className="d-flex">
            <div className=" mx-1 TweetText text-dark fw-semibold ">Khalid</div>
            <div className="mx-1 TweetText ">@khalid</div>
            <div className="mx-1 TweetText ">8s ago</div>
          </div>
          <div className="ms-1 TweetText text-dark">Hey I am Khalid</div>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-2">
        <div className="d-flex  ">
          <BiMessageRounded className="message" size={"20px"} />
          <p className="likes ms-1 ">0</p>
        </div>
        <div className="d-flex">
          <FaRegHeart className="message" size={"20px"} />
          <p className="likes ms-1 ">0</p>
        </div>
        <div className="d-flex">
          <MdOutlineBookmarkBorder className="message" size={"20px"} />
          <p className="likes ms-1 ">0</p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
