import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useUserInfo = () => {
  const [profileData, setProfileData] = useState(null);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/userinfo", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(response.data.data); // Handle the response data
      setProfileData(response.data.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  return profileData;
};

export default useUserInfo;
