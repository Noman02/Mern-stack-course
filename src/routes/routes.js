import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/pages/Blog/Blog";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login/Login";
import Register from "../components/pages/Login/Register/Register";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
