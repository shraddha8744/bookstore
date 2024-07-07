import React from "react";
import Loder from "../components/Loder/Loder";
import BookCard from "../components/BookCard/BookCard";
import useAllBook from "../hook/useAllBook";

const AllBooks = () => {
  const bookData = useAllBook();
  return (
    <div className="px-4 pt-[89px] bg-zinc-900 ]">
      <h1 className="text-2xl text-yellow-100  pt-6 px-5 font-semibold">
        All Books
      </h1>

      {!bookData && (
        <div className="flex items-center justify-center my-20 ">
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

export default AllBooks;
