import React from "react";
import { Link } from "react-router-dom";
// import ReactSwitch from "react-switch";

const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow-lg p-4">
        <div className="flex-1">
          <Link to="/" className=" text-xl font-bold">
            <span className="text-blue-700 ">MERN</span> Stack Course
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="">SIGN OUT</Link>
            </li>
          </ul>
          {/* <ReactSwitch></ReactSwitch> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
