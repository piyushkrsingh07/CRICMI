import React from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import { useEffect } from 'react'
import { addCurrIndPlayersImages } from '../src/redux/Slices/teamSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const usePlayerImages = ({imageId}) => {
      console.log("dekho id ")
console.log(imageId);
const [imageUrl, setImageUrl] = useState(null);
const dispatch=useDispatch();
const correct="c"+imageId;
    // console.log("dekho correct")
    // console.log(correct)
   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

useEffect(()=>{
   const fetchImage=async()=>{
    try{
         // Add a delay of 1 second (1000 milliseconds)
     await delay(3000);
    console.log("hello")
      const response=await fetch('https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/'+correct+'/i.jpg?p=gthumb'||'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/'+correct+'/i.jpg?p=de'||'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/'+correct+'/i.jpg?p=thumb'||'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/'+correct+'/i.jpg?p=det',API_OPTIONS)
     
      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      setImageUrl(imageObjectURL);
      // dispatch(addCurrIndPlayersImages(imageUrl))

      dispatch(addCurrIndPlayersImages({ [imageId]: imageObjectURL }));
    } catch (error) {
      console.error("Error fetching image: ", error);
    }
  };

  fetchImage();
}, [imageId, dispatch]);
return imageUrl;

 };

 



export default usePlayerImages
