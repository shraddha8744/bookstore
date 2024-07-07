import axios from "axios";
import { toast } from "react-toastify";

const addFev = async (id) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/addfev/${id}`,
      {},
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to favorites:", error);
    toast.error("Failed to add to favorites");
    throw error;  // re-throw the error to handle it in the calling function
  }
};

export default addFev;
