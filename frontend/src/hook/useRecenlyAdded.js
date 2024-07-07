import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../slice/recentalyAddedSlice";
import { useEffect } from "react";

const useRecentlyAdded=()=>{
    const dispatch = useDispatch();

    const bookData = useSelector((state) => state.fourBooks.fourBooks);
    const RecentalyAdded = async () => {
      let response = await axios.get("http://localhost:8080/api/fourbook", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(addBooks(response.data.data));
    };
    useEffect(() => {
      RecentalyAdded();
    }, []);
    return bookData
}
export default useRecentlyAdded