import { configureStore } from '@reduxjs/toolkit';
import recentlyAddedReducer from '../slice/recentalyAddedSlice';
import userLoginReducer from '../slice/loginSlice'; // Import the reducer
import cartSlice from '../slice/cartSlice';

export const store = configureStore({
  reducer: {
    fourBooks: recentlyAddedReducer,
    login: userLoginReducer,
    cart:cartSlice
  },
});
