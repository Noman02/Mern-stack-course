import React from "react";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
// import ReactSwitch from "react-switch";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut, setError } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="navbar shadow-lg p-4 mt-4">
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
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user && user.uid ? (
              <li>
                <Link onClick={handleLogOut}>SIGN OUT</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
          {user && user.uid ? (
            <div className="tooltip" data-tip={user?.displayName}>
              <button>
                {" "}
                <img className="w-12" src={user.photoURL} alt="" />
              </button>
            </div>
          ) : (
            <FaUser></FaUser>
          )}
          {/* <ReactSwitch></ReactSwitch> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
