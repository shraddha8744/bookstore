import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Logout } from "../../slice/loginSlice";
import { userLogo } from "../../utils/constant";

const SideBar = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(Logout());
    console.log("logout successfully");
    navigate("/");
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-lg mt-10 text-white flex flex-col items-center justify-between h-[95%] pb-72">
      <div className="flex items-center flex-col justify-center">
        <img src={userLogo} alt="" className="h-20 rounded-full" />
        <p className="mt-3 text-xl text-zinc-100 font-semibold">
          {data.username}
        </p>
        <p className="mt-1 text-normal text-zinc-300">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-slate-500 lg:block"></div>
      </div>

      <div className="w-full">
        <p
          className="text-zinc-100 font-semibold w-full py-2 mt-2 text-center hover:bg-zinc-900 rounded transition-all duration-300 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          Favourites
        </p>
      </div>
      <button
        className="bg-zinc-900 w-full text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300"
        onClick={handleLogout}
      >
        Logout <FiLogOut className="ml-2 mt-1" />
      </button>
    </div>
  );
};

export default SideBar;
