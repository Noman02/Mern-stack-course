import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const {
    error,
    setError,
    createUser,
    updateUserProfile,
    popupSignInWithGoogle,
    popupSignInWithGithub,
  } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        form.reset();
        updateUser(name, photoURL);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const updateUser = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
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
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-8"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photoURL"
          >
            PhotoURL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="photoURL"
            type="text"
            placeholder="photoURL"
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
            required
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
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign up
          </button>
        </div>
        <div className="text-red-600">{error}</div>
        <div className="flex justify-center mt-4 mb-4">
          <button className="text-2xl mr-3" onClick={handlePopUpWithGoogle}>
            <FaGoogle></FaGoogle>
          </button>
          <button className="text-2xl" onClick={handlePopUpWithGithub}>
            <FaGithub></FaGithub>
          </button>
        </div>
        <p className="text-right">
          Already a user?{" "}
          <Link className="text-blue-600 font-semibold" to="/login">
            LOGIN
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
