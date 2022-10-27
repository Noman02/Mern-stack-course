import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const toastAlert = () => {
    toast.success("success");
  };
  const course = useLoaderData();
  const { name, price, picture } = course;
  return (
    <div className="w-2/4 mx-auto mt-6">
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
  );
};

export default Checkout;
