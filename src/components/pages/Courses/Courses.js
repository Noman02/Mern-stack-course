import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../LeftSideNave/LeftSideNav";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        {courses.map((course) => (
          <LeftSideNav key={course.id} course={course}></LeftSideNav>
        ))}
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-12">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
