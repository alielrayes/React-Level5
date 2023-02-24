import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myName: "Ali Hassan",
  myAge: 28,
  myCounter: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeName: (state) => {
      state.myName = "allaa";
    },

    changeAge: (state) => {
      state.myAge = 33;
    },

    // action.payload => القيمة التى بداخل الاقواس
    incrementByten: (state, action) => {
      state.myCounter += action.payload;
    },
  },
});

//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const { changeName, changeAge, incrementByten } = counterSlice.actions;

export default counterSlice.reducer;
