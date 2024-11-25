import { newsSlice } from "./Slices/newsSlice";
import { profileSlice } from "./Slices/profileSlice";
import { teamSlice } from "./Slices/teamSlice";
import {userSlice} from "./Slices/userSlice";
import {configureStore} from "@reduxjs/toolkit";



export const store=configureStore({
    reducer:{
        user:userSlice.reducer,
        cricteams:teamSlice.reducer,
        cricprof:profileSlice.reducer,
        cricnews:newsSlice.reducer,

    }
})