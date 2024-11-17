import {userSlice} from "./Slices/userSlice";
import {configureStore} from "@reduxjs/toolkit";



export const store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
})