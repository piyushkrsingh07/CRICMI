import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../redux/Slices/userSlice';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Navbar = (props) => {
    let IsLoggedIn=props.IsLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }  
    
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
          }))
        navigate("/browse")

          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/")
          
        }
      });
    },[])
  return (
  
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between bg-black'>
    <img
   
    src="https://ucarecdn.com/8afb5061-fe45-4842-8bfc-e30b86af4030/-/preview/169x38/"
    
    
    />
    {/* <div className='flex ml-5 mr-3 gap-3 pt-1'>
        {!IsLoggedIn && 
        <NavLink to="/">
            <button className='text-black bg-white px-2 py-1 rounded-sm border-hidden transition-all duration-200 hover:border-blue-400 hover-border'>Login</button>
        </NavLink>
       
        }
        {!IsLoggedIn && 
        <NavLink to="/signup">
        <button className='text-black bg-white px-2 py-1 rounded-sm border-hidden transition-all duration-200 hover:border-blue-400 hover-border'>Signup</button>
    </NavLink> */}
{/* } */}


        
    {/* </div> */}

    {user && (

    <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>





    
    )}
    </div>
 
  )
}

export default Navbar
