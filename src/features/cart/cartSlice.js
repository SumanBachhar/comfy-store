import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      toast.success("Item added to cart");
    },
    clearCart: (state, action) => {},
    removeCart: (state, action) => {},
    editItem: (state, action) => {},
  },
});

export const { addItem, clearCart, removeCart, editItem } = cartSlice.actions;
export default cartSlice.reducer;
