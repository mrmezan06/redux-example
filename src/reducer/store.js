import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import greetReducer from "./greetingSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    greeting: greetReducer,
  },
});
