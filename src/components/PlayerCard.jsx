import React, { useContext } from 'react'
import usePlayerImages from '../../hooks/usePlayerImages'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
// import { ProfileContext } from '../../context/context'


const PlayerCard = ({name,imageId,battingStyle,bowlingStyle}) => {
  usePlayerImages({ imageId })
  //to send images id to store
  const navigate=useNavigate();
 
//  const value=useContext(ProfileContext)
//  console.log(value,"check value")



 

  // Access Redux state if needed (e.g., for fallback handling)
  const playerIndImg = useSelector(
    (store) => store.cricteams?.currIndPlayersImages?.[imageId]
  );
  // const imageUrl = usePlayerImages({ imageId });
  const imageUrl = usePlayerImages( {imageId});
  console.log("DEKHO IMAGE URL")
  console.log("Image URL in PlayerCard:", imageUrl);  // Get the image URL from the custom hook

  const finalImageUrl=imageUrl||playerIndImg;

















//  console.log("dikhao url");
// console.log(URL);
console.log("dekho id card m")
console.log(imageId)
const visitProfile=()=>{
  

//  value.setProfile(
//     name,
//     imageId,
//     battingStyle,
//     bowlingStyle,
//   );


// console.log("dekhna set profile ko")
// console.log(value.setProfile)
  // <Profile name:name imageId:imageId battingStyle:battingStyle bowlingStyle:bowlingStyle/>
  // console.log("dekho jo bhja h")
  // console.log(name)
navigate("/profile",{
  state: {
    name,
    imageId,
    battingStyle,
    bowlingStyle,
  },
})
  // <Profile name:name imageId:imageId battingStyle:battingStyle bowlingStyle:bowlingStyle/>
  console.log("dekho jo bhja h")
  console.log(name)
 
}

  return (
    <div className='pl-4 pr-[50px]  z-20 text-white ' style={{ width: '320px' }}>
      <div className='relative'>
        <img className='w-full h-auto absolute -z-10' src="https://ucarecdn.com/
b445e92f-972d-4a1d-8bcc-8a414bc29268/
-/preview/382x584/" alt="" />
       
        
      <div className='flex flex-col pl-[68px] '>
           <div className="">
             {finalImageUrl ? (
              <img
                className="w-[160px] h-[160px]  object-cover  z-50  mt-14 "
                src={finalImageUrl}
                alt={`${name}'s Image`}
              />
            ) : (
              <p>Loading...</p>
            )} 
          </div>
          <div className='pr-2'>
      <h3 className='text-white font-bold  uppercase'>{name}</h3>
     
    
     
      <p className='text-white  font-bold'> {battingStyle}</p>
      <p className='text-white  font-bold'> {bowlingStyle}</p>
      <button onClick={visitProfile} className='text-black bg-white px-auto py-1 rounded-3xl font-bold mx-5 pl-2 pr-2 mt-4 pointer-cursor '>View Profile</button>
     
      </div>
        </div>
        
     
        </div>

      </div>  
        
  )
}

export default PlayerCard
