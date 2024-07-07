import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify
import useLogin from "../hook/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, loading } = useLogin();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(value);
  };

  return (
    <div className="pt-[89px] bg-zinc-900 h-screen ">
      <ToastContainer />
      <div className="bg-zinc-800 w-[350px] mt-20 m-auto text-white rounded-lg">
        <h1 className="p-3 text-2xl font-semibold ml-3 mt-3 text-yellow-100">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 px-4">
          <label htmlFor="email" className="ml-3 mt-3">
            Email
          </label>
          <input
            type="email"
            placeholder="xyz@gmail.com"
            className="p-3 m-2 bg-zinc-900"
            name="email"
            value={value.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="ml-3 mt-3">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            className="p-3 m-2 bg-zinc-900"
            value={value.password}
            name="password"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 m-2 p-3 mt-3 font-semibold text-xl rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="ml-14 my-4 pb-5">
          New user? Register here{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
