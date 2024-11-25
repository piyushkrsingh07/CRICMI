import React from 'react'
import { useSelector } from 'react-redux'
import PlayerList from './PlayerList'
import useIndiaData from '../../hooks/useIndiaData'
import { useEffect } from 'react'
import Score from './Score'

const MainContainer = () => {
    

  useIndiaData();

    const indteam=useSelector(store=>store.cricteams?.currIndPlayers)
    console.log("aage container main m")
   
    console.log(indteam)

    //  console.log("yhi diqqat hogi")
    //  console.log(indteam.player[2])




  return (
    <div className='w-screen h-auto bg-black overflow-x-auto no-scrollbar'>
      <div className=' '>
        <div>
          <div className='text-3xl text-white py-4 ml-4'>Live Score</div>
          <Score/>
        </div>
    <PlayerList title={"Indian Team"} indteam={indteam}/>
      </div>
    </div>
  )
}

export default MainContainer
