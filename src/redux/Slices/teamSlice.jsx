import { createSlice } from "@reduxjs/toolkit";

export const teamSlice=createSlice({
    name:'cricteams',
    initialState:{
        currIndPlayers:null,
    },
    reducers:{
        addCurrIndPlayers:(state,action)=>{
            state.currIndPlayers=action.payload;
        }
    }

})

export const {addCurrIndPlayers}=teamSlice.actions;

export default teamSlice.reducer;