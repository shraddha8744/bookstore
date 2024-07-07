import axios from "axios";

const cartDelete = async (id) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/deletecart/${id}`,
      {},
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default cartDelete;
