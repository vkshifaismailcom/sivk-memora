import {configureStore} from "@reduxjs/toolkit";
import ProductsReducer from "./slices/productSlice.js"; 
export const store=configureStore({
    reducer:{
        products:ProductsReducer
    }
});