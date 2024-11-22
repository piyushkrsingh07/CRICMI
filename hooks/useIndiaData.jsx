import React from 'react'
import { API_OPTIONS } from '../src/utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrIndPlayers } from '../src/redux/Slices/teamSlice';

const useIndiaData = () => {

  const dispatch=useDispatch()
    
const getIndiaData=async()=>{
    const data=await fetch("https://cricbuzz-cricket.p.rapidapi.com/teams/v1/2/players",API_OPTIONS);
    const json=await data.json();
    console.log("dekho result")
    console.log(json)
    dispatch(addCurrIndPlayers(json.player))
    console.log("dekhna players ko")
    console.log(json.player)
}

useEffect(()=>{
    getIndiaData();
},[])



  
}

export default useIndiaData



