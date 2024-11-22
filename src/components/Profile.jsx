import React from 'react'
import PlayerCard from './PlayerCard'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const location=useLocation()
  const{name,imageId,battingStyle,bowlingStyle}=location.state||{};
  console.log("see name")
  console.log(name)

  return (
    <div>
      This is profile
    </div>
  )
}

export default Profile
