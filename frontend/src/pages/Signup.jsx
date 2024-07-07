import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify
import useHandleSubmit from "../hook/usehandleSubmit";

const Signup = () => {
  const handleSubmit = useHandleSubmit();
  const navigate = useNavigate("");

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmits = async (e) => {
    handleSubmit(value, e);
  };

  return (
    <div className="pt-[89px] bg-zinc-900 h-screen">
      <ToastContainer />
      <div className="bg-zinc-800 w-[450px] mt-4 m-auto text-white rounded-lg">
        <h1 className="p-3 text-2xl font-semibold ml-3 mt-3 text-yellow-100">
          Sign Up
        </h1>
        <form className="grid grid-cols-1 px-4" onSubmit={handleSubmits}>
          <label htmlFor="username" className="ml-3 mt-4">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="p-3 m-2 bg-zinc-900 outline-white rounded"
            value={value.username}
            onChange={handleChange}
          />

          <label htmlFor="email" className="ml-3 mt-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="xyz@gmail.com"
            className="p-3 m-2 bg-zinc-900 outline-white rounded"
            value={value.email}
            onChange={handleChange}
          />

          <label htmlFor="password" className="ml-3 mt-3">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="p-3 m-2 bg-zinc-900 outline-white rounded"
            value={value.password}
            onChange={handleChange}
          />

          <label htmlFor="address" className="ml-3 mt-3">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            className="p-3 m-2 bg-zinc-900 outline-white rounded"
            value={value.address}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-500 m-2 p-3 mt-3 font-semibold text-xl rounded-lg hover:bg-blue-600"
          >
            Signup
          </button>
        </form>
        <p className="ml-24 my-4 pb-5">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
