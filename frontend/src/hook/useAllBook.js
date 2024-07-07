import { useDispatch, useSelector } from "react-redux";
import { addAllBooks } from "../slice/recentalyAddedSlice";
import axios from "axios";
import { useEffect } from "react";


const useAllBook=()=>{
    const dispatch = useDispatch();

  const bookData = useSelector((state) => state.fourBooks.allBooks);
  const allbooksAdd = async () => {
    let response = await axios.get("http://localhost:8080/api/allbook", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    dispatch(addAllBooks(response.data.data));
  };
  useEffect(() => {
    allbooksAdd();
  }, []);

  return bookData

}

export default useAllBook