import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        theme: themeReducer
    },
});

