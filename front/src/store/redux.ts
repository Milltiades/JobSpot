import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './citySlice'
import categorySlice from "./categorySlice";
import authSlice from './authSlice'


const store = configureStore({
    reducer:{
        city: cityReducer,
        category: categorySlice,
        auth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store