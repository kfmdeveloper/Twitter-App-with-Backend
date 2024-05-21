import React from "react";
import Avatar from "react-avatar";
import { AiOutlinePicture } from "react-icons/ai";
import Tweet from "./Tweet";
const CreateTweett = () => {
  return (
    <>
      <div className="p-2 ">
        <div className="d-flex ms-2 ">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo7ZaOSsDyuxuU-JRRcTiAAzK9xGlUADgYcnv0xSuTA&sz"
            size="35"
            round={true}
            className="me-2"
          />
          <input
            className="tweetInput"
            type="text"
            placeholder="What is happening!"
          />
        </div>
        <div className=" mt-4 p-1 d-flex justify-content-between w-100">
          <AiOutlinePicture color="gray" size={"26"} />
          <button className="btn btn-primary ">Post</button>
        </div>
      </div>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </>
  );
};

export default CreateTweett;
