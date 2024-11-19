import React from 'react'
import { NavLink } from 'react-router-dom'
import useIndiaData from '../../hooks/useIndiaData'
import MainContainer from './MainContainer';

const Browse = () => {
  useIndiaData();
  return (
    <div >
       <MainContainer/>
    </div>
  )
}

export default Browse
