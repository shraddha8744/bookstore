import axios from "axios";
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allFevBooks } from "../../slice/recentalyAddedSlice";

const BookCard = ({ books, fev }) => {
  const { url, title, author, price, _id } = books;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    async (e) => {
      e.stopPropagation();
      try {
        const response = await axios.put(
          `http://localhost:8080/api/deletebook/${_id}`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (response.data.success) {
          fetchFevBooks();
        }
      } catch (error) {
        console.error("Error removing book from favourites:", error);
      }
    },
    [_id]
  );

  const handleBook = (_id) => {
    navigate(`/book-detail/${_id}`);
  };

  const fetchFevBooks = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/allfevbooks",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.data.success) {
        dispatch(allFevBooks(response.data.data));
      }
    } catch (error) {
      console.error("Error fetching favourite books:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchFevBooks();
  }, [fetchFevBooks]);

  return (
    <div className="cursor-pointer bg-zinc-800  hover:scale-105 hover:duration-300">
      <div
        className=" rounded-lg p-4 flex flex-col"
        onClick={() => handleBook(_id)}
      >
        <div className="bg-zinc-900 rounded-lg flex items-center justify-center">
          <img src={url} alt={title} className="h-[25vh] w-[130px] my-3" />
        </div>
        <div className="h-[60px]">
          <h2 className="mt-4 text-[18px] text-zinc-200 font-semibold hover:text-zinc-100">
            {title}
          </h2>
        </div>
        <p className="mt-2 text-zinc-400 font-semibold">{author}</p>
        <p className="mt-2 text-zinc-200 font-semibold text-xl">₹ {price}</p>
      </div>
      {fev && (
        <button
          className="bg-yellow-100 text-[18px] px-4 py-1 rounded border border-yellow-500 text-yellow-500 mb-2 ml-6 mt-2"
          onClick={handleRemove}
        >
          Remove From Favourite
        </button>
      )}
    </div>
  );
};

export default BookCard;
