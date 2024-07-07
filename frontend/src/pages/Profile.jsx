import React from "react";
import SideBar from "../components/profile/SideBar";
import { Outlet } from "react-router-dom";
import Loder from "../components/Loder/Loder";
import useUserInfo from "../hook/useUserInfo";

const Profile = () => {
  const profileData = useUserInfo();

  return (
    <div className="bg-zinc-900 px-12 flex flex-row w-full pt-[89px] py-8 gap-4 text-white">
      {!profileData && (
        <div className="w-full h-[100%] flex items-center justify-center">
          <Loder />
        </div>
      )}
      {profileData && (
        <>
          <div className="w-1/6">
            <SideBar data={profileData} />
          </div>
          <div className="w-5/6 mt-10">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
