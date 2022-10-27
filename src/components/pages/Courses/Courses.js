import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../LeftSideNave/LeftSideNav";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-300">
      <div className=" h-2/4 m-4 shadow-lg">
        <h2 className="text-2xl text-center my-4">Course Category</h2>
        {courses.map((course) => (
          <LeftSideNav key={course.id} course={course}></LeftSideNav>
        ))}
      </div>
      <div className="col-span-3 m-4">
        <h2 className="text-left text-3xl mt-2">
          Select your suitable course from{" "}
          <span className="text-blue-700">MERN stack course</span>
        </h2>
        <div className=" grid grid-cols-2 gap-6">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
