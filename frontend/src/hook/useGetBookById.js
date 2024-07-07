import axios from "axios";
import { addOneBooks } from "../slice/recentalyAddedSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetBookById=(id)=>{
    const dispatch=useDispatch()
    const getBookById = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/book/${id}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          });
          dispatch(addOneBooks(response.data.data));
        } catch (error) {
          console.error("Error fetching book data:", error);
          toast.error("Failed to fetch book data");
        }
      };
    
      useEffect(() => {
        getBookById();
      }, [id, dispatch]);
    

}

export default useGetBookById;