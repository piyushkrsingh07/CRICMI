import React, { useEffect, useState } from 'react'
import PlayerCard from './PlayerCard'
import { useSelector } from 'react-redux';
import usePlayerImages from '../../hooks/usePlayerImages';


const PlayerList = ({title,indteam}) => {

//   const{imageId,battingStyle,bowlingStyle}=indteam;
const [playerData,setplayerData]=useState([]);
// const indteam=useSelector(store=>store.cricteams?.currIndPlayers)
console.log("Current Team Data in list", indteam);


useEffect(()=>{
  if (indteam ) {
    const filteredPlayers=indteam.filter(player=>player.id)

    setplayerData(filteredPlayers);
  } else {
    console.warn('indteam  is not defined');
  }
 
},[indteam])

useEffect(()=>{
    if(playerData.length>0){
        console.log("Player data updated:",playerData)
        const playerIds = playerData.map((player) => player.id);
        console.log("Player IDs:", playerIds);
    }
},[playerData])


  
  return (
    <div className='px-6  '>
        <h1 className='text-3xl py-4 text-white '>{title}</h1>
        <div className='flex  p-6 no-scrollbar '>


         <div className='flex  '>
           {Array.isArray(playerData) &&playerData?.map((player) =>(
            <PlayerCard key={player.id} name={player.name}
            imageId={player.imageId} battingStyle={player.battingStyle} bowlingStyle={player.bowlingStyle} id={player.id}/>
            

           ))

           } 
         

         </div>


        </div>

      
    </div>
  )
}
export default PlayerList
