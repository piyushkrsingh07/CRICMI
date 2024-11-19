import React from 'react'
import { useSelector } from 'react-redux'
import PlayerList from './PlayerList'

const MainContainer = () => {

    const indteam=useSelector(store=>store.cricteams?.currIndPlayers)
    console.log("aage container main m")
   
    console.log(indteam)
  return (
    <div>
      <div className='bg-black w-screen h-screen '>
    <PlayerList title={"Indian Team"} indteam={indteam}/>
      </div>
    </div>
  )
}

export default MainContainer
