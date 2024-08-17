import { createSlice } from "@reduxjs/toolkit";
import { loadStateFromSessionStorage, saveStateToSessionStorage } from "./StorageUtil";
 
const initialState=loadStateFromSessionStorage()?.cart || { itemList: [], totalQuantity: 0, totalPrice:0 };

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.itemList.find(
          (item) => item.id === newItem.id
        );
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.itemList.push({
            name: action.payload.name,
            price: action.payload.price,
            id: action.payload.id,
            image:action.payload.image,
            quantity: 1,
          });
        }
        state.totalQuantity = state.itemList.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = calculateTotalPrice(state.itemList); 
      saveStateToSessionStorage({ cart: state });
      },
      removeFromCart(state, action) {
        const { id, quantity,image, price} = action.payload;
        const findItem = state.itemList.find(item => item.id === id);
        if (findItem) {
            if (findItem.quantity === 1) {
                state.itemList = state.itemList.filter(item => item.id !== id);
            } else {
                findItem.quantity--;
            }
            state.totalQuantity = state.itemList.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = calculateTotalPrice(state.itemList); 
        saveStateToSessionStorage({ cart: state });
        }
    },
    },
  });
  
  export const { addToCart, removeFromCart} = cartSlice.actions;
  export default cartSlice.reducer;