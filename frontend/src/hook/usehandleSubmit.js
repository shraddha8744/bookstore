import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useHandleSubmit = () => {
  const navigate = useNavigate();

  const handleSubmit = async (value, e) => {
    e.preventDefault();
    if (
      value.username === "" ||
      value.email === "" ||
      value.password === "" ||
      value.address === ""
    ) {
      toast.error("All fields are required");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/signup",
          value
        );
        if (response.data.success) {
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("An error occurred during signup");
      }
    }
  };

  return handleSubmit;
};

export default useHandleSubmit;
