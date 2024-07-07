import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
import useAllFev from "../../hook/useAllFev";
import { starLogo } from "../../utils/constant";

const Favourite = () => {
  const data = useSelector((state) => state.fourBooks.allFevBooks);

  useAllFev();

  return (
    <div className="">
      {(data === null || data.length === 0) && (
        <div className="text-center mt-56 text-4xl">
          <h1 className="text-zinc-500 font-semibold flex flex-col justify-center items-center">
            No Favourite Books
          </h1>
          <img src={starLogo} alt="" className="h-24 ml-[500px] mt-6" />
        </div>
      )}
      <div className="grid grid-cols-4 gap-5">
        {data &&
          data.map((item) => {
            return (
              <div key={item._id}>
                <BookCard books={item} fev={true} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favourite;
