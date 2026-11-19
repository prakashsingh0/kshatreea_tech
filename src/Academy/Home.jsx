import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
     
      

      <Outlet />
    </div>
  );
};

export default Home;