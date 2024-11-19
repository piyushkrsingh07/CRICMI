import { createSlice } from "@reduxjs/toolkit";

export const teamSlice=createSlice({
    name:'cricteams',
    initialState:{
        currIndPlayers:null,
        currIndPlayersImages:null,
    },
    reducers:{
        addCurrIndPlayers:(state,action)=>{
            state.currIndPlayers=action.payload;
        },
        addCurrIndPlayersImages:(state,action)=>{
            state.currIndPlayersImages=action.payload;
        }
    }

})

export const {addCurrIndPlayers,addCurrIndPlayersImages}=teamSlice.actions;

export default teamSlice.reducer;