import React from "react";

const Course = ({ course }) => {
  const { name, price, picture, description, id } = course;
  return (
    <div>
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{description.slice(0, 80)}</p>
    </div>
  );
};

export default Course;
