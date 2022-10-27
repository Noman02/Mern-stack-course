import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, price, picture, description, id } = course;
  return (
    <div>
      <Link to={`/course/${id}`}>
        <div className="card lg:card-side bg-base-100 shadow-xl mt-12 h-80 hover:bg-blue-200 duration-300">
          <figure>
            <img className="w-80 h-60 p-4 " src={picture} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title">Price: ${price}</h2>
            <p>{description.slice(0, 80)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Course;
