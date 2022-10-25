import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(event.target);

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-8"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="********"
            />
          </div>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </Link>
          <div className="flex items-center justify-between">
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign up
            </Link>
          </div>
          <div className="flex justify-around">
            <Link>
              <FaGoogle></FaGoogle>
            </Link>
            <Link>
              <FaFacebook></FaFacebook>
            </Link>
            <Link>
              <FaGithub></FaGithub>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
