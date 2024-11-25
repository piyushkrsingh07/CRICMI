import React, { useEffect } from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import { useDispatch } from 'react-redux'
import { addCurrIndBatStats } from '../src/redux/Slices/profileSlice'

const useIndiaBatStats = ({id}) => {
    console.log("id in stat")
    console.log(id)
    const dispatch=useDispatch()
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
    const getIndiaBatData=async()=>{
try{
    const data=await fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/'+id+'/batting',API_OPTIONS)
    const json=await data.json();
    console.log("dekho stats")
    console.log(json)
    dispatch(addCurrIndBatStats(json))

    
}
catch(error){
    console.log("Error in getting batting data",error)

}
 };
 useEffect(()=>{
    getIndiaBatData();
 },[id,dispatch])
}

export default useIndiaBatStats
