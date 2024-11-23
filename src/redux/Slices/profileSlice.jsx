import { createSlice } from "@reduxjs/toolkit";
// import { addCurrIndPlayersData } from "./teamSlice";
// import { addCurrIndPlayersData } from "./teamSlice";

export const profileSlice=createSlice({
name:'cricprof',
initialState:{
    currIndPlayersData:null,
},
reducers:{
    addCurrIndPlayersData:(state,action)=>{
        state.currIndPlayersData=action.payload;
    }
}
})
export const {addCurrIndPlayersData}=profileSlice.actions;

export default profileSlice.reducer;