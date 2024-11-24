import { createSlice } from "@reduxjs/toolkit";
// import { addCurrIndPlayersData } from "./teamSlice";
// import { addCurrIndPlayersData } from "./teamSlice";

export const profileSlice=createSlice({
name:'cricprof',
initialState:{
    currIndPlayersData:null,
    currIndBatStats:null,
    currIndBowlStats:null
},
reducers:{
    addCurrIndPlayersData:(state,action)=>{
        state.currIndPlayersData=action.payload;
    },
    addCurrIndBatStats:(state,action)=>{
        state.currIndBatStats=action.payload;
    },
    addCurrIndBowlStats:(state,action)=>{
        state.currIndBowlStats=action.payload;
    }
}
})
export const {addCurrIndPlayersData,addCurrIndBatStats,addCurrIndBowlStats}=profileSlice.actions;

export default profileSlice.reducer;