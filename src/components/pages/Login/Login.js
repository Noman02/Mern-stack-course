import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    logIn,
    setError,
    error,
    popupSignInWithGoogle,
    popupSignInWithGithub,
  } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePopUpWithGoogle = () => {
    popupSignInWithGoogle(googleProvider)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePopUpWithGithub = () => {
    popupSignInWithGithub(githubProvider)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-8"
        >
          <div className="mb-4">
            <h2 className="text-2xl text-center font-semibold">Please Login</h2>
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

          <div className="text-red-600">{error}</div>
          <div className="flex items-center justify-between mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Login
            </button>
          </div>
          <div className="flex justify-center mt-4 mb-4">
            <button className="text-2xl mr-3" onClick={handlePopUpWithGoogle}>
              <FaGoogle></FaGoogle>
            </button>
            <button className="text-2xl" onClick={handlePopUpWithGithub}>
              <FaGithub></FaGithub>
            </button>
          </div>
          <p className="text-right">
            Need an account?{" "}
            <Link className="text-blue-600 font-semibold" to="/register">
              SIGNUP
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
