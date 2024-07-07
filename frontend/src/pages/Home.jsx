import React from "react";
import Hero from "../components/Home/Hero";
import RecentalyAdded from "./RecentalyAdded";

const Home = () => {
  return (
    <div className="bg-zinc-900 text-white px-10 lg: py-10 ">
      <Hero />
      <RecentalyAdded />
    </div>
  );
};

export default Home;
