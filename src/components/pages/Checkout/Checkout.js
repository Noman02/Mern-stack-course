import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Checkout = () => {
  const toastAlert = () => {
    toast.success("Order Placed.");
  };
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  const { name, price, picture } = course;
  return (
    <div className="w-3/4 mx-auto mt-6 flex justify-center ">
      <div>
        <h2 className="text-2xl">Checkout Order</h2>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-80 rounded pl-2" src={picture} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title p-6 ">
              Welcome<span className="text-blue-700">{name}</span>
              Course
            </h2>
            <p>
              <div>
                <h3>Subtotal: 11.11</h3>
                <h3>Shipping: 12.12</h3>
              </div>
            </p>
            <div className="card-actions justify-between mt-8">
              <h3 className="text-xl font-semibold">
                Total: $ <span className="text-blue-700">{price}</span>{" "}
              </h3>
              <button onClick={toastAlert} className="btn btn-primary">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 ml-12">
        <h2 className="text-blue-700 text-xl mb-4">User Information</h2>
        <div>
          <img className="w-12" src={user.photoURL} alt="" />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Name: {user?.displayName}</h2>
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
