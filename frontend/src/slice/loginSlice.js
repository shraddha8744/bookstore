import { createSlice } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
  name: "userStatus",
  initialState: {
    isLoggedIn: false,
    role:"user"
  },
  reducers: {
      login: (state) => {
      state.isLoggedIn = true;
    },
    Logout: (state) => {
      state.isLoggedIn = false;
    },
    changeRole: (state,action) => {
      state.role=action.payload;
    },
  },
});

export const { login,Logout,changeRole } = userLoginSlice.actions;
export default userLoginSlice.reducer;
