import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '/Components/CartSlice';
const store = confgureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;