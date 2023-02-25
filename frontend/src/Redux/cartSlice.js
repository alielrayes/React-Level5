import { createSlice } from "@reduxjs/toolkit";

// use "useSelector" to get the array
const initialState = {
  selectedProducts: [

  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
    // action.payload => product From API => القيمة التى بداخل الاقواس
  reducers: {
    addToCart: (state, action) => {
  // action.payload => product From API => القيمة التى بداخل الاقواس
  const productWithQuantity = {...action.payload, "quantity": 1}
  state.selectedProducts.push(productWithQuantity)
    },

    increaseQuantity: (state, action) => {
      // action.payload => product From user 
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id
      })

      incresdedProuct.quantity +=1

    },

    decreaseQuantity: (state, action) => {
  // action.payload => product From user 
      console.log("doneeeeeeeeeeee")
    },

    deleteProduct: (state, action) => {
  // action.payload => product From user 
      console.log("doneeeeeeeeeeee")
    },
  },
});

//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const {deleteProduct, addToCart, increaseQuantity, decreaseQuantity } = counterSlice.actions;

export default counterSlice.reducer;
