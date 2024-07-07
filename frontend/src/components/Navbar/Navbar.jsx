import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const islogin = useSelector((state) => state.login.isLoggedIn);

  return (
    <div className="bg-zinc-800 text-white px-4 sm:px-6 lg:px-14 py-4 sm:py-6 flex items-center justify-between shadow-lg fixed w-full">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold">
          <span className="text-yellow-300">B</span>
          <span className="text-red-400">o</span>
          <span className="text-green-400">o</span>

          <span className="text-slate-100">k</span>

          <span className="text-blue-400">s</span>
          <span className="text-green-400">t</span>
          <span className="text-red-400">o</span>
          <span className="text-purple-400">r</span>
          <span className="text-pink-400">e</span>
        </h1>
      </div>
      <div className="hidden sm:flex gap-4 lg:gap-10 items-center font-semibold text-base sm:text-xl">
        {islogin && (
          <>
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/allbooks")}>
              All Books
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/cart")}>
              Cart
            </p>
            <p
              className="cursor-pointer border border-blue-800 py-2 px-3 rounded-lg hover:bg-white hover:text-zinc-900"
              onClick={() => navigate("/profile")}
            >
              Profile
            </p>
          </>
        )}

        {!islogin && (
          <>
            <button
              className="border border-blue-500 h-8 sm:h-10 w-16 sm:w-20 rounded-lg cursor-pointer hover:bg-blue-500 hover:border-none transition-all duration-300"
              onClick={() => navigate("/")}
            >
              Login
            </button>
            <button
              className="h-8 sm:h-10 w-20 sm:w-24 bg-blue-500 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:border border-blue-500"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
