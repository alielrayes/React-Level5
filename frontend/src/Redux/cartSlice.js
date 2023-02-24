import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      // state.value += action.payload
    },
  },
});

export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
