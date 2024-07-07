import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changeRole, login } from "../slice/loginSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (value) => {
    if (value.email === "" || value.password === "") {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/login", value);

      if (response.data.success) {
        const { id, token, role } = response.data.data;
        dispatch(login());
        dispatch(changeRole(role));

        localStorage.setItem("id", id);
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        toast.success("Login successful");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};

export default useLogin;
