import {configureStore} from "@reduxjs/toolkit";
import ProductsReducer from "./slices/productSlice.js"; 
import CartReducer from "./slices/cartSlice.js";
export const store=configureStore({
    reducer:{
        products:ProductsReducer,
        cart:CartReducer
    }
});