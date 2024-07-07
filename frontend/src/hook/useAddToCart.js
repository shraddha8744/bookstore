import axios from "axios";


const AddToCart=async(id)=>{
    try {
        const response = await axios.put(
          `http://localhost:8080/api/addcart/${id}`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error adding to cart:", error);
      }

}

export default AddToCart