import { createSlice } from "@reduxjs/toolkit";
// import { addCurrIndBatStats } from "./profileSlice";
// import { addCurrIndBatStats } from "./profileSlice";

export const batSlice=createSlice({
    name:'cricbat',
    initialState:{
       currIndBatStats:null
    },
    reducers:{
        addCurrIndBatStats:(state,action)=>{
            state.currIndBatStats=action.payload;
        }
    }

    }
)
export const {addCurrIndBatStats}=batSlice.actions;
