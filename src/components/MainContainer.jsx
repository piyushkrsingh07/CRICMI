import React from 'react'
import { useSelector } from 'react-redux'
import PlayerList from './PlayerList'
import useIndiaData from '../../hooks/useIndiaData'
import { useEffect } from 'react'

const MainContainer = () => {
    

  useIndiaData();

    const indteam=useSelector(store=>store.cricteams?.currIndPlayers)
    console.log("aage container main m")
   
    console.log(indteam)

    //  console.log("yhi diqqat hogi")
    //  console.log(indteam.player[2])




  return (
    <div className='w-screen h-screen bg-black overflow-x-auto no-scrollbar'>
      <div className=' '>
    <PlayerList title={"Indian Team"} indteam={indteam}/>
      </div>
    </div>
  )
}

export default MainContainer
