import React, { useContext } from 'react'
import usePlayerImages from '../../hooks/usePlayerImages'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
// import { ProfileContext } from '../../context/context'


const PlayerCard = ({name,imageId,battingStyle,bowlingStyle,id}) => {
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
console.log({imageId})
const visitProfile=()=>{
  


navigate("/profiledata",{
  state: {
    name,
    finalImageUrl,
    battingStyle,
    bowlingStyle,
    id,
  },
})

  console.log("dekho jo bhja h")
  console.log(name)
  console.log("dekho jo id bhja h")
  console.log(id)
  console.log("dekho jo boeling style in location")
  console.log(bowlingStyle)
 
}

  return (
    <div className='pl-4 pr-[50px]  z-20 text-white ' style={{ width: '362px' }}>
      <div className='relative'>
        <img className='w-full h-auto absolute -z-10' src="https://ucarecdn.com/
b445e92f-972d-4a1d-8bcc-8a414bc29268/
-/preview/382x584/" alt="" />
<div className='absolute pl-5  pt-20 flex flex-col gap-y-2'>
  <img src="https://ucarecdn.com/86a8cc09-879c-4ae2-b72e-382897568a48/-/preview/665x724/" className='w-8' alt="" />
  {/* <img src="https://ucarecdn.com/70f3a5a8-5874-4b05-b6ad-de24be78a129/-/preview/1000x525/" alt="" /> */}
       <img src="https://ucarecdn.com/e4874d6e-d075-45f7-86cd-24b0c1c477e7/-/preview/32x23/" className='w-7 pl-1' alt="" />

       <img src="https://ucarecdn.com/47b8e3db-ed03-4315-a7b0-13ab3262a286/-/preview/484x1000/" alt="" className='w-8 h-12'/>
       <img src="https://ucarecdn.com/9696a2fe-a114-44e4-9cbe-f757dacd9e9e/-/preview/317x1000/" alt="" className='w-8 h-32' />
        {/* <div className='text-white font-bold text-xl [writing-mode:vertical-rl]  uppercase '>Indian</div> */}
        </div>
      <div className='flex flex-col pl-[78px] '>
           <div className="">
             {finalImageUrl ? (
              <img
                className="w-[170px] h-[195px]  object-cover  z-50  mt-14 ml-2"
                src={finalImageUrl}
                alt={`${name}'s Image`}
              />
            ) : (
              <p>Loading...</p>
            )} 
          </div>
          <div className='pr-2 pt-1'>
      <h3 className='text-white font-bold  uppercase text-center mr-[5px]'>{name}</h3>
     
    
     
      <p className='text-white  font-bold'> {battingStyle}</p>
      <p className='text-white  font-bold '> {bowlingStyle}</p>
      <button onClick={visitProfile} className='text-black bg-white px-auto py-1 rounded-3xl font-bold mx-5 pl-2 pr-2 mt-4 pointer-cursor'>View Profile</button>
     
      </div>
        </div>
        
     
        </div>

      </div>  
        
  )
}

export default PlayerCard
