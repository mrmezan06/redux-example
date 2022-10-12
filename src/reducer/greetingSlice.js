import { createSlice } from "@reduxjs/toolkit";

export const greetSlice = createSlice({
  name: "greet",
  initialState: {
    data: 5,
  },
  reducers: {
    greetByAmount: (state, action) => {
      state.data += action.payload.greet || 0;
    },
  },
});

export const { greetByAmount } = greetSlice.actions;

export default greetSlice.reducer;
