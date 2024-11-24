import { createSlice } from "@reduxjs/toolkit";


export const newsSlice=createSlice({
    name:'cricnews',
    initialState:{
        currIndPlayersNews:null,
    },
    reducers:{
        addCurrIndPlayersNews:(state,action)=>{
            state.currIndPlayersNews=action.payload;
        }
    }
    })

    export const {addCurrIndPlayersNews}=newsSlice.actions;

    export default newsSlice.reducer;

