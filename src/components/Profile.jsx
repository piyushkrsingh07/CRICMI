import React from 'react'
import PlayerCard from './PlayerCard'
import { useLocation } from 'react-router-dom'
import usePlayerImages from '../../hooks/usePlayerImages'
import { useSelector } from 'react-redux'

const Profile = () => {
 
  const location=useLocation()
  const{name,finalImageUrl,battingStyle,bowlingStyle}=location.state||{};
  console.log("see name")
  console.log(name)
  console.log("dekho final image url")
  console.log(finalImageUrl)
  // usePlayerImages({imageId })
  // const playerIndImg = useSelector(
  //   (store) => store.cricteams?.currIndPlayersImages?.[imageId]
  // );
  // const imageUrl = usePlayerImages( imageId);
  // console.log("DEKHO IMAGE URL")
  // console.log("Image URL in Profile:", imageUrl);  // Get the image URL from the custom hook

  // const finalImageUrl=imageUrl||playerIndImg;
  

  return (
      <div>
          {/* // <div className='w-screen h-screen bg-[#3f61a5] -z-30' > */}
    <div className='pl-4 pr-[50px]   text-white ' style={{ width: '320px' }}>
    <div className='relative'>
      <img className='w-full h-auto absolute z-1' src="https://ucarecdn.com/
b445e92f-972d-4a1d-8bcc-8a414bc29268/
-/preview/382x584/" alt="" />
<div className='absolute pl-5  pt-20 flex flex-col gap-y-2 '>
<img src="https://ucarecdn.com/86a8cc09-879c-4ae2-b72e-382897568a48/-/preview/665x724/" className='w-8' alt="" />
{/* <img src="https://ucarecdn.com/70f3a5a8-5874-4b05-b6ad-de24be78a129/-/preview/1000x525/" alt="" /> */}
     <img src="https://ucarecdn.com/e4874d6e-d075-45f7-86cd-24b0c1c477e7/-/preview/32x23/" className='w-7 pl-1' alt="" />

     <img src="https://ucarecdn.com/47b8e3db-ed03-4315-a7b0-13ab3262a286/-/preview/484x1000/" alt="" className='w-8 h-12'/>
     <img src="https://ucarecdn.com/9696a2fe-a114-44e4-9cbe-f757dacd9e9e/-/preview/317x1000/" alt="" className='w-8 h-32' />
      {/* <div className='text-white font-bold text-xl [writing-mode:vertical-rl]  uppercase '>Indian</div> */}
      </div>
    <div className='flex flex-col pl-[68px] absolute'>
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
   
  
   
    <p className='text-white  font-bold '> {battingStyle}</p>
    <p className='text-white  font-bold'> {bowlingStyle}</p>

   
    </div>
      </div>
      
   
      </div>

    </div>  

    </div>
      
  )
}

export default Profile
