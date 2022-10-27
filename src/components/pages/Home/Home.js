import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../../../assets/home-bg.jpg";

const Home = () => {
  return (
    <div className="bg-violet-400 m-3 rounded">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={Image}
              alt=""
              className="rounded h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-4xl">
              Are you finding
              <span className="dark:text-violet-400"> the best course</span> to
              learn mern stack effectively then welcome you. here is the
              solutions
            </h1>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <div className="mt-4">
                <Link to="/courses">
                  <button className="btn btn-primary">
                    Review Courses{" "}
                    <FaArrowRight className="ml-3"></FaArrowRight>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
