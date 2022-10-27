import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/pages/Blog/Blog";
import Checkout from "../components/pages/Checkout/Checkout";
import CourseDetail from "../components/pages/CourseDetail/CourseDetail";
import Courses from "../components/pages/Courses/Courses";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => {
          return fetch("http://localhost:5000/allCourses");
        },
      },
      {
        path: "/course/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
      },
    ],
  },
]);
