import { configureStore } from "@reduxjs/toolkit";
import storySlice from "./Slices/storySlice";
import adminSlice from "./Slices/adminSlice";
import authSlice from "./Slices/authSlice";


export const store = configureStore({
  reducer: {
    Story: storySlice,
    Admin: adminSlice,
    auth : authSlice
  },
});
 