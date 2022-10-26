import React from "react";
import { Link } from "react-router-dom";

const LeftSideNav = ({ course }) => {
  const { id, name } = course;
  return (
    <div>
      <h2>
        <Link to={`/course/${id}`}>{name}</Link>
      </h2>
    </div>
  );
};

export default LeftSideNav;
