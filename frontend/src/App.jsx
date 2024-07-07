import React, { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllBooks from "./pages/AllBooks";
import BookDetail from "./pages/bookDetail";
import ErrorPage from "./pages/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { changeRole, login } from "./slice/loginSlice";
import Profile from "./pages/Profile";

import Favourite from "./components/profile/Fevourite";
import Cart from "./pages/Cart";

const App = () => {
  const islogin = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(login());
      dispatch(changeRole(localStorage.getItem("role")));
    }
  }, []);

  return (
    <div>
      <Navbar />
      {!islogin ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />{" "}
          {/* Catch all undefined routes */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbooks" element={<AllBooks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book-detail/:id" element={<BookDetail />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Favourite />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />{" "}
          {/* Catch all undefined routes */}
        </Routes>
      )}
    </div>
  );
};

export default App;
