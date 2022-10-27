import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <h1 className="font-semibold text-4xl my-12">Oops!</h1>
      <p className="text-red-500 text-lg">
        Sorry, an unexpected error has occurred{" "}
        <span className="text-blue-700">
          This is not a mern stack course page!!
        </span>
      </p>
      <p className="text-5xl mt-6 font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
