import { createSlice } from "@reduxjs/toolkit";

// use "useSelector" to get the array
const initialState = {
  selectedProducts: [
    {
      "id": 1,
      "productName": "T-shirt",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      "price": 100,
      "imageLink": "https://res.cloudinary.com/dpm5z8e71/image/upload/v1677029702/Online%20store/4_y2jc81.jpg",
      "quantity": 1
      },
      {
      "id": 2,
      "productName": "T-shirt",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      "price": 200,
      "imageLink": "https://res.cloudinary.com/dpm5z8e71/image/upload/v1677029701/Online%20store/3_gvu4ga.jpg",
      "quantity": 1
      },
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
        return sssssssssssssssssss
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
