import React from 'react'
import { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkValidData } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import {  updateProfile } from "firebase/auth";
import { addUser,removeUser } from '../redux/Slices/userSlice';
import { useDispatch } from 'react-redux';




const Signup = (props) => {

    const [errorMessage,seterrorMessage]=useState(null);

    const email=useRef(null);
     const password=useRef(null);
     const name=useRef(null);
     const dispatch=useDispatch();



     const navigate=useNavigate();

     let setIsLoggedIn=props.setIsLoggedIn;

     const handleButtonClick=()=>{
        console.log(email.current.value);
        console.log(password.current.value);
 
        const message=checkValidData(email.current.value,password.current.value)
        seterrorMessage(message);
 
        if(message) return;
      
        createUserWithEmailAndPassword(auth,email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    //abhi bss store m email aur password aaya hai
    updateProfile(user, {
      displayName:name.current.value, photoURL: ""
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName,photoURL}=auth.currentUser;

      dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        })
      );
    }).catch((error) => {
      // An error occurred
      // ...
      seterrorMessage(error.message)
    });
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    seterrorMessage(errorCode+"-"+errorMessage)
  });

     }
    const signInUser=()=>{
        navigate("/")
    }
  return (
  
    <div className=' w-screen overflow-x-hidden h-screen'>
   <form onSubmit={(e)=>e.preventDefault()} className='w-[370px] relative p-12 bg-blue-700 my-[100px] mx-auto right-0 left-0 text-white rounded-lg '>
    <p className='font-bold '>Signup to</p>
   <h2 className='font-bold text-xl py-2 text-yellow-400'>Join the CRICINFO family</h2>
   <input type="text" ref={name} placeholder="Full Name" className='p-2 my-5 w-full bg-transparent border rounded-3xl placeholder:font-bold ' />
   <input required type="text" ref={email} placeholder="Email Address" className='p-2 my-5 w-full bg-transparent border rounded-3xl placeholder:font-bold ' />
   <input required type="password" ref={password} placeholder='Password ' className='p-2 my-5 w-full bg-transparent border rounded-3xl placeholder:font-bold'/>
   <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
   <div className='flex flex-col space-y-0 my-5 mb-[-10px]'>
   <button className='w-full py-1 px-auto text-black bg-yellow-400 rounded-3xl 'onClick={handleButtonClick}>SIGNUP</button>
   <p className='py-4 cursor-pointer font-bold text-sm self-center' onClick={signInUser}>Already registered?Sign In Now</p>
   </div>
   </form>
    </div>

  )
}

export default Signup
