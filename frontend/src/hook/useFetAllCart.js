import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../slice/cartSlice";

const useFetchAllCart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCartData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/allcart", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.data.success) {
        dispatch(addToCart(response.data.data));
        calculateTotal(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalAmount);
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return { total, loading, calculateTotal };
};

export default useFetchAllCart;
