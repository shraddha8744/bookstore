import React, { useState } from "react";
import Loder from "../components/Loder/Loder";
import { MdDelete } from "react-icons/md";
import mycart from "../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import useFetchAllCart from "../hook/useFetAllCart";
import cartDelete from "../hook/useCartDelete";

const Cart = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { total, loading, calculateTotal } = useFetchAllCart();

  const handleDelete = async (id) => {
    try {
      const response = await cartDelete(id);
      if (response.data.success) {
        const updatedCart = cart.filter((item) => item._id !== id);
        dispatch(addToCart(updatedCart));
        calculateTotal(updatedCart); // Recalculate the total
      }
    } catch (error) {
      setError("Failed to delete item from cart.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-700">
        <Loder className="h-20" />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-transparent w-full h-full">
        <h1 className="text-5xl font-semibold text-zinc-400">Empty Cart</h1>
        <img
          src={mycart}
          alt="Empty Cart"
          className="h-[50vh] mt-10 cart-image block bg-white"
        />
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 pt-[100px] px-10">
      <h1 className="text-4xl font-semibold text-zinc-500 mb-8">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center h-32 bg-zinc-800 p-4 text-white rounded-lg shadow-md"
          >
            <img
              src={item.url}
              alt={item.title}
              className="h-32 object-cover rounded-lg p-3 w-28"
            />
            <div className="flex-grow ml-4 w-3/6">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="text-gray-400 mt-2">
                {item.desc
                  ? item.desc.slice(0, 70)
                  : "No description available"}
                ...
              </p>
            </div>
            <h1 className="text-xl font-semibold w-1/6">₹ {item.price}</h1>
            <button
              className="ml-4 p-2 bg-red-600 text-red-100 text-3xl rounded hover:bg-red-700"
              onClick={() => handleDelete(item._id)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 w-72 bg-zinc-700 rounded-lg p-4 shadow-white ml-[1150px]">
        <div className="flex justify-end">
          <h4 className="text-2xl font-semibold text-zinc-200 mr-8">
            {cart.length} books
          </h4>
          <h2 className="text-2xl font-semibold text-zinc-200">
            Total: ₹ {total}
          </h2>
        </div>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Cart;
