import React from "react";
import CreateTweet from "./FeedTweet";

import { Outlet } from "react-router-dom";

const Feed = () => {
  return (
    <div style={{ width: "60%" }} className=" h-100 createTweet">
      <CreateTweet />
    </div>
  );
};

export default Feed;
