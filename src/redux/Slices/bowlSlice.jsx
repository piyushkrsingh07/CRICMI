// import { addCurrIndBowlStats } from "./profileSlice";
import { createSlice } from "@reduxjs/toolkit"
// import { addCurrIndBowlStats } from "./profileSlice"


export const bowlSlice=createSlice({
    name:'cricbowl',
    initialState:{
        currIndBowlStats:null,
    },
    reducers:{
        addCurrIndBowlStats:(state,action)=>{
            state.currIndBowlStats=action.payload;
        }
    }
})
export const {addCurrIndBowlStats}=bowlSlice.actions;