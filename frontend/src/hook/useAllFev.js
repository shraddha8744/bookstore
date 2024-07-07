import { useEffect } from "react";
import { allFevBooks } from "../slice/recentalyAddedSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const useAllFev=()=>{
    const dispatch = useDispatch();
//   const data = useSelector((state) => state.fourBooks.allFevBooks);

  const fetFev = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/allfevbooks",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        dispatch(allFevBooks(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetFev();
  }, []);
}

export default useAllFev