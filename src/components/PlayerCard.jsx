import React from 'react'
import usePlayerImages from '../../hooks/usePlayerImages'

const PlayerCard = ({name,imageId,battingStyle,bowlingStyle}) => {

    // const{name,imageId,battingStyle,bowlingStyle}=indteam
  const URL = usePlayerImages({ imageId })

// console.log("dikhao url");
// console.log(URL);
console.log("dekho id card m")
console.log(imageId)

  return (
    <div>
         <div className="player-card">
      <h3 className='text-white'>{name}</h3>
      <img src={URL} alt={name} />
      {name!=='BATSMEN'&&name!=='ALL ROUNDER'&&name!=='WICKET KEEPER'&&name!=='BOWLER'?(
        <>
      <p className='text-white'>Batting Style: {battingStyle}</p>
      <p className='text-white'>Bowling Style: {bowlingStyle}</p>
      </>
)
// :
:
(
  <>
  <br/>
  </>

)
}

        </div>

      </div>  
        
  )
}

export default PlayerCard
