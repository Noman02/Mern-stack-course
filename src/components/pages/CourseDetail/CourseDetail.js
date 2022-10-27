import React from "react";
import { FaArrowRight, FaFileDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
  const { id, name, picture, price, description } = course;
  return (
    <div className="flex justify-center mt-6">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="m-3 shadow-md">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link className="normal-case text-xl mr-4">Get pdf file </Link>
              <p>
                <FaArrowRight></FaArrowRight>
              </p>
            </div>
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <FaFileDownload className="text-xl"></FaFileDownload>
              </button>
            </div>
          </div>
        </div>
        <figure>
          <img className="w-3/4 rounded" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">
            Price:<span className=" text-yellow-800">${price}</span>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${id}`}>
              <button className="btn btn-primary">Get premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
