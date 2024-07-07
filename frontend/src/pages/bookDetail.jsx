import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loder from "../components/Loder/Loder";
import { GrLanguage } from "react-icons/gr";
import { FaHeart, FaShoppingCart, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify
import useGetBookById from "../hook/useGetBookById";
import addFev from "../hook/useAddFev";
import AddToCart from "../hook/useAddToCart";

const BookDetail = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.fourBooks.onebook);
  const isUserLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const role = useSelector((state) => state.login.role);
  useGetBookById(id);

  //add to favourites
  const handleFev = async () => {
    const response = await addFev(id);
    console.log(response);

    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  //add to cart
  const handleCartClick = async () => {
    const response = await AddToCart(id);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return data == null ? (
    <Loder />
  ) : (
    <div className="pt-[95px] px-12 py-8 bg-slate-900 flex gap-8">
      <ToastContainer />
      <div className="mt-10 w-3/6 h-[90vh] gap-8 px-8">
        <div className="flex justify-center bg-zinc-800 rounded-lg">
          <img
            src={data.url}
            alt={data.title}
            className="h-[55vh] w-[300px] mt-12 mb-12"
          />
          {isUserLoggedIn && role === "user" && (
            <div className="flex flex-col h-[200px] mt-12 ml-16">
              <button
                className="bg-white rounded-full text-3xl p-2 text-red-500"
                onClick={handleFev}
              >
                <FaHeart />
              </button>
              <button
                className="bg-white rounded-full text-3xl p-2 mt-6 text-blue-500"
                onClick={handleCartClick}
              >
                <FaShoppingCart />
              </button>
            </div>
          )}
          {isUserLoggedIn && role === "admin" && (
            <div className="flex flex-col h-[200px] mt-12 ml-16">
              <button className="bg-white rounded-full text-3xl p-2">
                <FaEdit />
              </button>
              <button className="bg-white rounded-full text-3xl p-2 mt-6 text-red-500">
                <MdDelete />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 w-3/6">
        <h1 className="text-4xl text-zinc-300 font-semibold">{data.title}</h1>
        <p className="text-zinc-400 mt-1">{data.author}</p>
        <p className="text-zinc-500 mt-4 text-xl">{data.desc}</p>
        <p className="flex mt-4 items-center justify-start text-zinc-400 font-bold">
          <GrLanguage className="mr-2" />
          {data.language}
        </p>
        <p className="mt-4 text-zinc-100 text-3xl font-semibold">
          Price : ₹{data.price}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
