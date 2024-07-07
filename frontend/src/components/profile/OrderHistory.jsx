import axios from "axios";
import React, { useEffect, useState } from "react";
import Loder from "../Loder/Loder";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const fetchOrderHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authorization token found.");
        return;
      }

      const response = await axios.get(
        `http://localhost:8080/api/orderhistory`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data.data);

      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        setError("Failed to fetch order history.");
      }
    } catch (error) {
      setError("An error occurred while fetching order history.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  return (
    <>
      {!orders && <Loder />}
      {orders && orders.length === 0 && (
        <div className="h-[100%] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
            No Order History
          </h1>
        </div>
      )}
      {orders && orders.length > 0 && (
        <div className="h-[100%] p-4 text-zinc-100">
          <h1 className="text-3xl font-semibold text-zinc-500 mb-8">
            YOUR order History
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[22%]">
              <h1>Books</h1>
            </div>{" "}
            <div className="w-[45%]">
              <h1>Description</h1>
            </div>{" "}
            <div className="w-[9%]">
              <h1>Price</h1>
            </div>{" "}
            <div className="w-[16%]">
              <h1>Status</h1>
            </div>{" "}
            <div className="w-[5%]">
              <h1>Mode</h1>
            </div>
          </div>
          {orders.map((items, i) => {
            return (
              <>
                <div className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer">
                  <div className="w-[3%]">
                    <h1 className="text-center">{i + 1}</h1>
                  </div>
                  <div className="w-[22%]">
                    <h1>{items.book.title}</h1>
                  </div>
                  <div className="w-[45%]">
                    <h1 className="">{items.book.desc.slice(0, 56)}...</h1>
                  </div>
                  <div className="w-[9%]">
                    <h1>{items.book.price}</h1>
                  </div>
                  <div className="w-[16%]">
                    <h1 className="font-semibold text-green-500">
                      {items.status == "order placed" ? (
                        <div className="text-yellow-500">{items.status}</div>
                      ) : items.status == "cancelled " ? (
                        <div className="text-yellow-500">{items.status}</div>
                      ) : (
                        items.status
                      )}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-zinc-400 text-sm">COD</h1>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default OrderHistory;
