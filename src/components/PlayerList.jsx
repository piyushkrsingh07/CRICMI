import React, { useEffect, useState } from 'react'
import PlayerCard from './PlayerCard'
import { useSelector } from 'react-redux';
import usePlayerImages from '../../hooks/usePlayerImages';


const PlayerList = ({title,indteam}) => {

//   const{imageId,battingStyle,bowlingStyle}=indteam;
const [playerData,setplayerData]=useState([]);
// const indteam=useSelector(store=>store.cricteams?.currIndPlayers)
// setplayerData(indteam.player);
// console.log("dekho players ko")
// console.log(playerData);
useEffect(()=>{
    setplayerData(indteam.player);
 
},[indteam])

useEffect(()=>{
    if(playerData.length>0){
        console.log("Player data updated:",playerData)
    }
},[playerData])


  
  return (
    <div className='px-6'>
        <h1 className='text-3xl py-4 text-white z-10'>{title}</h1>
        <div className='flex overflow-x-scroll p-6 no-scrollbar'>


         <div className='flex'>
           {Array.isArray(playerData) &&playerData?.map((player) =>(
            <PlayerCard key={player.id} name={player.name}
            imageId={player.imageId} battingStyle={player.battingStyle} bowlingStyle={player.bowlingStyle}/>
            

           ))

           } 
         

         </div>


        </div>

      
    </div>
  )
}

export default PlayerList
