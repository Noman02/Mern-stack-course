import React from "react";
import { Link } from "react-router-dom";

const LeftSideNav = ({ course }) => {
  const { id, name } = course;
  return (
    <div className="text-center">
      <p>
        <Link
          className="text-xl hover:text-blue-700 hover:font-bold"
          to={`/course/${id}`}
        >
          <h2 className="mb-4">{name}</h2>
        </Link>
      </p>
    </div>
  );
};

export default LeftSideNav;
