import React from "react";
import { bookStore } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex flex-col lg:flex-row ">
      <div className="lg:w-2/5 mt-10 lg:mt-36 px-4 lg:px-0 ">
        <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100">
          Discover Your Next Great Read
        </h1>
        <p className="mt-4 text-lg lg:text-xl text-zinc-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          et obcaecati praesentium ea aliquam.
        </p>
        <button
          className="px-6 lg:px-14 py-2 mt-6 lg:mt-10 border border-yellow-100 text-yellow-100 text-xl lg:text-2xl font-semibold hover:bg-zinc-800 rounded-full"
          onClick={() => navigate("/allbooks")}
        >
          Discover Books
        </button>
      </div>
      <div className="lg:w-3/5 lg:ml-20 mt-6 lg:mt-20 px-4 lg:px-0">
        <img
          src={bookStore}
          alt=""
          className="hidden lg:block h-64 lg:h-[550px] w-full lg:w-[700px] rounded-xl shadow-slate-50 shadow-lg cursor-pointer]"
        />
      </div>
    </div>
  );
};

export default Hero;
