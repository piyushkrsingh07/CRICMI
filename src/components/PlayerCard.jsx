import React from 'react'
import usePlayerImages from '../../hooks/usePlayerImages'
import { useSelector } from 'react-redux'

const PlayerCard = ({name,imageId,battingStyle,bowlingStyle}) => {
  usePlayerImages({ imageId })

const playerIndImg=useSelector(store=>store.cricteams?.currIndPlayersImages);
console.log("pic in player card")
console.log(playerIndImg,"harsh")


//  console.log("dikhao url");
// console.log(URL);
console.log("dekho id card m")
console.log(imageId)

  return (
    <div className='pl-4 pr-[50px] relative'>
      <div>
        <img className='w-[550px] h-[]' src="https://ucarecdn.com/
b445e92f-972d-4a1d-8bcc-8a414bc29268/
-/preview/382x584/" alt="" />
          <div className=''>
         <div className=" py-4 flex flex-col gap-y-1 w-[270px]   border-[#FFD700] mt-[-150px] z-10 px-10 ">
         <img src={playerIndImg}  />
      <h3 className='text-white font-bold pl-[40px] '>{name}</h3>
     
      {name!=='BATSMEN'&&name!=='ALL ROUNDER'&&name!=='WICKET KEEPER'&&name!=='BOWLER'?(
        <>
      <p className='text-white pl-[20px] font-bold'> {battingStyle}</p>
      <p className='text-white pl-[20px] font-bold'> {bowlingStyle}</p>
      </>
)
// :
:
(
  <>

  </>

)
}

        </div>
        </div>
        </div>

      </div>  
        
  )
}

export default PlayerCard
