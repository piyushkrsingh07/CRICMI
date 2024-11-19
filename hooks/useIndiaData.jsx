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
    dispatch(addCurrIndPlayers(json))
}

useEffect(()=>{
    getIndiaData();
},[])

//fetching image data from cricbuzz api and upscaling with pickart api

// const cricbuzzAuthToken = '3f4f1d4a55msh4c890a877592781p1ba02cjsn8822c936bbf5'; // Replace with your Cricbuzz API auth token
// const picsartAuthToken = 'eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtZWY0MDQ0NzUtYjE3YS00YmQ3LTg0NDctMWY4YTEyN2M2NTc5IiwiYXVkIjoiNDQ2OTY4Mzk4MDI4MTAxIiwibmJmIjoxNzMxODkzNzcwLCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiNDQ2OTY4Mzk4MDI4MTAxIiwiaWF0IjoxNzMxODkzNzcwLCJqdGkiOiIxMWRhMmVmZS03YTUwLTQ4YzQtODUwNy1hZThjNjhlYzI5NDUifQ.Q3VFklK3jPXg7_Mg6B_lPyw7IFgoNXGYAtmF6QbaoT1Pn6t3MAwuyrpyvtKtN36NyhRbLYgKPofW0OF6DUwZzQIoqPx67wXj2TD_vjQxBU70i6nXpejgikM-57PkB1ad1ZZEw9sF41KQiIx6xm8NrxPW7xPmxjoJ1wsZWJpnImPMstCJpuJfg2Pd5r23udY-b37QYkV2GNr6m5kOH2Y5DkMRkDw7z2OfTn95npvDwvg0ahE1-u1yQKYFIfXSKo4cbYN7759txgXI4AXNvk3zT592sbNVig-pAImsAiUE1DghajtwdYpGAyADHcQUThDaSQCjSQtl_dsWC2z2NuJBWg'; // Replace with your Picsart API auth token

// async function upscaleImage() {
//   try {
//     // Step 1: Fetch the image using the required API authorization
//     const imageResponse = await fetch(
//       'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c171091/i.jpg',
//       {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '3f4f1d4a55msh4c890a877592781p1ba02cjsn8822c936bbf5',
//             'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com' // Add the authorization header
//         },
//       }
//     );
//     console.log(imageResponse);

//     if (!imageResponse.ok) {
//       throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
//     }

//       // Step 2: Convert the image to a Blob (binary data)
//       const imageBlob = await imageResponse.blob();

//    console.log("dekho response img");
//     console.log(imageBlob)
//     // Step 3: Use the Picsart API to upscale the image
//     const url = 'https://api.picsart.io/tools/1.0/upscale';
//     const formData = new FormData();
//     formData.append('upscale_factor', '2');
//     formData.append('format', 'JPG');
//     formData.append('image', imageBlob, 'image.jpg'); // Send Base64 data instead of URL

//     const options = {
//       method: 'POST',
//       headers: {
//         accept: 'application/json',
//         'X-Picsart-API-Key': picsartAuthToken, // Picsart API auth token
//       },
//       body: formData,
//     };

//     // Step 4: Send the request to the Picsart API
//     const response = await fetch(url, options);
//     console.log("dekho response")
//     console.log(response)

//     if (!response.ok) {
//       throw new Error(`Failed to upscale image: ${response.statusText}`);
//     }

//     const json = await response.json();
  
//     console.log('Upscaled Image Response:', json);
//   } catch (error) {
//     console.error('Error fetching or upscaling the image:', error);
//   }
// }

    

// upscaleImage();

  
}

export default useIndiaData



