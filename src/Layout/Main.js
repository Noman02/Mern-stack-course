import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../components/LeftSideNave/LeftSideNav";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-4">
        <div className=" bg-slate-500">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
