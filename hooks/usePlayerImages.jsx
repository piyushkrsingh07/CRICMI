import React from 'react'
import { API_OPTIONS } from '../src/utils/constants'
import { useEffect } from 'react'
import { addCurrIndPlayersImages } from '../src/redux/Slices/teamSlice'
import { useDispatch } from 'react-redux'

const usePlayerImages = ({imageId}) => {
      console.log("dekho id ")
console.log(imageId);


const dispatch=useDispatch();
 const getPlayerImages=async()=>{
    const correct="c"+imageId;
    console.log("dekho correct")
    console.log(correct)
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      // Add a delay of 1 second (1000 milliseconds)
      await delay(1000);
      console.log("hello")
   const data=await fetch('https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/'+correct+'/i.jpg',API_OPTIONS)
  //  const json=await data.json();
  //  console.log("dekho json data")
  //  console.log(json)


  
  // Read the binary data as a buffer
  // const result = await data.text();
  // console.log(result);

    // Read the binary data as an ArrayBuffer
    const binaryData = await response.arrayBuffer();

    // Convert the binary data into a string (if JSON-encoded text is expected)
    const textData = new TextDecoder().decode(binaryData);

    // Parse the string into JSON
    const jsonData = JSON.parse(textData);
    console.log("dekh binary data")

    console.log(jsonData);
  
  dispatch(addCurrIndPlayersImages(jsonData))
   
      // // Convert binary data to Base64
      // const base64Image = Buffer.from(arrayBuffer).toString('base64');
  
      // // Create a JSON object with the Base64 string
      // const jsonData = {
      //   imageId: correct,
      //   image: `data:image/jpeg;base64,${base64Image}`, // Prefix with MIME type
      // };
  
      // console.log("JSON Data:", jsonData);
    }
    catch (error) {
      console.error("Error fetching player image:", error);
    }
 }
 useEffect(()=>{
   if(imageId){
      getPlayerImages();
   }
 },[imageId])
}

export default usePlayerImages
