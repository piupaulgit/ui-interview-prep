import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
