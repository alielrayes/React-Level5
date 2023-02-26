import { createSlice } from "@reduxjs/toolkit";

// use "useSelector" to get the array
const initialState = {
  selectedProducts: [],
  selectedProductsID: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  // action.payload => product From API => القيمة التى بداخل الاقواس
  reducers: {
    addToCart: (state, action) => {
      // action.payload => product From API => القيمة التى بداخل الاقواس
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuantity);
      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem("selectedProducts", fffffffffffffff)
      localStorage.setItem("selectedProductsID", fffffffffffffff)
    },

    increaseQuantity: (state, action) => {
      // action.payload => product From user
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incresdedProuct.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      // action.payload => product From user
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incresdedProuct.quantity -= 1;
      if (incresdedProuct.quantity === 0) {
        // delete the selected product
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });

        const newArr2 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });

        state.selectedProducts = newArr;
        state.selectedProductsID = newArr2;
      }
    },

    deleteProduct: (state, action) => {
      // action.payload => product From user
      // delete the selected product
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.selectedProducts = newArr;
    },
  },
});

//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const { deleteProduct, addToCart, increaseQuantity, decreaseQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;
