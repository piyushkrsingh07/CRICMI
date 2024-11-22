import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Browse from './components/Browse'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import Profile from './components/Profile'
// import { ProfileContext } from '../context/context'


function App() {
  const[IsLoggedIn,setIsLoggedIn]=useState(false);
  // const[Profile,setProfile]=useState();

  return (
    <>
    {/* <ProfileContext.Provider value={{Profile,setProfile}}> */}
      <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

<Routes>
   
   <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>}  />
   <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
   <Route path="/browse" element={<Browse setIsLoggedIn={setIsLoggedIn}/>} />
   <Route path="/profile" element={<Profile setIsLoggedIn={setIsLoggedIn}/>}/>





</Routes>
{/* </ProfileContext.Provider> */}
    </>
  )
}

export default App
