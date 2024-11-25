import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Score = () => {
    const [team1Score, setTeam1Score] = useState(null);
    const [team2Score, setTeam2Score] = useState(null);
    const [status, setStatus] = useState(null);

    const API_OPTIONS2 = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '3f4f1d4a55msh4c890a877592781p1ba02cjsn8822c936bbf5',
          'x-rapidapi-host': 'cricbuzz-cricket2.p.rapidapi.com'
        }
        
      };
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const getScore=async()=>{
            try{
                await delay(3000);
             const data=await fetch('https://cricbuzz-cricket2.p.rapidapi.com/matches/v1/live',API_OPTIONS2)
            const json=await data.json()
            console.log("dekho live data")
            console.log(json)
            const match = json.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0];
         const team1Score = match.matchScore.team1Score;
         const team2Score = match.matchScore.team2Score;
         const status=match.matchInfo.seriesName;
         console.log("dekho team 1 score")
         console.log(team1Score);
         console.log("dekh team 2 score")
         console.log(team2Score)
         console.log("dekh series name")
         console.log(status)
        setTeam1Score(match.matchScore.team1Score);
        setTeam2Score( match.matchScore.team2Score);
        setStatus(match.matchInfo.seriesName);
        
          console.log("see team 1 score")
         console.log(team1Score);
         console.log("see team 2 score")
         console.log(team2Score)
         console.log("see series name")
         console.log(status)

        
            
          
            
    
           }
           catch(error){
              console.log("Error in getting live data",error)
           }
      };
      useEffect(()=>{
        getScore();
      },[])
  return (
    <div className=''>
       
    <div className='flex flex-col gap-y-3 text-white bg-blue-950 rounded-md w-1/3 mx-auto pt-2 pb-2 h-auto'>
    <div className='ml-7'>{status}</div>
      <div>
         <h3 className='font-bold ml-7'>India Score</h3>
      {team1Score
    ? Object.entries(team1Score).map(([key, value]) => (
        <div key={key} className="flex pr-5">
          <div className='flex gap-x-2 rounded-md ml-7'>
          
          <div>Innings: {value.inningsId}</div>
          <div>Runs: {value.runs}</div>
          <div>Wickets: {value.wickets}</div>
          <div>Overs: {value.overs}</div>
          </div>
        </div>
      ))
    : <div>Team 1 Score not fetched</div>}  
  
     </div>
     <div>
      <h3 className='font-bold ml-7'>Australia Score</h3>
     {team2Score
    ? Object.entries(team2Score).map(([key, value]) => (
        <div key={key} className="flex mr-5">
          <div className='flex gap-x-2 rounded-md ml-7'>
          
          <div>Innings: {value.inningsId}</div>
          <div>Runs: {value.runs}</div>
          <div>Wickets: {value.wickets}</div>
          <div>Overs: {value.overs}</div>
          </div>
        </div>
      ))
    : <div>Team2 score not fetched</div>}
     </div>
  </div>
  </div>
  )
}

export default Score
