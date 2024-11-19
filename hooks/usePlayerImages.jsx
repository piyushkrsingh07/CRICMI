import React from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import { useEffect } from 'react'

const usePlayerImages = (imageId) => {
//    console.log("dekho id ")
//  console.log(imageId);
 const getPlayerImages=async()=>{
   // const correct="c"+imageId;
   //  const data=await fetch('https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/'+correct+'/i.jpg',API_OPTIONS)
    const json=await data.json();
    console.log("dekho photo")
    console.log(json)
 }
 useEffect(()=>{
   if(imageId){
      getPlayerImages();
   }
 },[imageId])
}

export default usePlayerImages
