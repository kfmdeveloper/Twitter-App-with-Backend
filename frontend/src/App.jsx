import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="home mt-1 ">
      <Body />
      <Toaster />
    </div>
  );
};

export default App;
