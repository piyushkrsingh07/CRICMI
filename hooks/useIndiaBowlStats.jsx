import React from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import { useDispatch } from 'react-redux'
import { addCurrIndBowlStats } from '../src/redux/Slices/profileSlice'
import { useEffect } from 'react'

const useIndiaBowlStats = ({id}) => {
    const dispatch=useDispatch()



    const getIndiaBowlData=async()=>{
        // try{
        //   const data=await fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/'+id+'/bowling',API_OPTIONS)
        //   const json=await data.json()
        //   console.log("dekho bowl stats")
        //   console.log(json)
        //   dispatch(addCurrIndBowlStats(json))
        // }
        // catch(error){
        //  console.log("Error in getting bowling data",error)
        // }

    }
    useEffect(()=>{
        getIndiaBowlData();

    },[id,dispatch])

  
}

export default useIndiaBowlStats
