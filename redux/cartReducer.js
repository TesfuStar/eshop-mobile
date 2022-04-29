import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: 'cart',

  initialState: {
    cartItems: [],
    cartQuantity: 0,
    cartTotalAmount: 0,
    quantity: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
      else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }


    },
    removeProduct: (state, action) => {
      const removedItem = state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id);
      state.cartItems = removedItem

    },
    //decrease cart
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem._id === action.payload._id);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1

      }
      else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const removedItem = state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id);
        state.cartItems = removedItem

      }

    },
    //increase cart
    increaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem._id === action.payload._id)
      state.cartItems[itemIndex].cartQuantity += 1


    },
    //clear cart 
    clearCart: (state, action) => {
      state.cartItems = [];


    },
    //cartAmount
    cartTotal: (state, action) => {
      let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
        return cartTotal
      }, { total: 0, quantity: 0 })
      state.cartQuantity = quantity;
      state.cartTotalAmount = total;
    },
  }

})

export default cartReducer.reducer

export const { addToCart, removeProduct, decreaseCart, increaseCart, clearCart } = cartReducer.actions