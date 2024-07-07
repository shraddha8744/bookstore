import React from "react";
import BookCard from "../components/BookCard/BookCard";
import Loder from "../components/Loder/Loder";
import useRecentlyAdded from "../hook/useRecenlyAdded";

const RecentalyAdded = () => {
  const bookData = useRecentlyAdded();
  return (
    <div className="">
      <h1 className="text-2xl text-yellow-100 font-semibold mx-4">
        Recentaly Added Books
      </h1>
      {!bookData && (
        <div className="flex items-center justify-center my-8">
          <Loder />
        </div>
      )}
      <div className="my-8 grid grid-cols-1 md:grid-cols-4 gap-4 sm:grid-cols-3 mx-4">
        {bookData &&
          bookData.map((item) => {
            return <BookCard key={item._id} books={item} />;
          })}
      </div>
    </div>
  );
};

export default RecentalyAdded;
