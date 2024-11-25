import React from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import { API_OPTIONS2 } from '../src/utils/constants'
import { useEffect } from 'react'
import { addCurrIndPlayersData } from '../src/redux/Slices/profileSlice'
import { useDispatch } from 'react-redux'

const useIndiaProfileData = ({id}) => {
    console.log("id dekh hook me")
   console.log(id);
    const dispatch=useDispatch()
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const getIndiaProfile=async()=>{
        try{
            await delay(2000);
        const data=await fetch('https://cricbuzz-cricket2.p.rapidapi.com/stats/v1/player/'+id,API_OPTIONS2)
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        const json=await data.json()
        console.log("dekho player profile")
        console.log(json)
        dispatch(addCurrIndPlayersData(json))
    } 
    catch(error){
            console.log("Error in getting profile",error)
        }
//     try{
//    const data=await fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/'+id,API_OPTIONS)
//       const json=await data.json()
//       console.log("dekho player profile")
//       console.log(json)
//        dispatch(addCurrIndPlayersData(json))
//  }
//     catch(error){
//        console.log("error in profile",error)
//     }
 
    }
useEffect(()=>{
   
    getIndiaProfile();

},[id,dispatch]);

    // return id;
    
 
}

export default useIndiaProfileData
