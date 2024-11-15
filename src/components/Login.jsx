import React from 'react'
import { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkValidData } from '../utils/validate';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"

const Login = (props) => {

    const [errorMessage,seterrorMessage]=useState(null);
    const email=useRef(null);
     const password=useRef(null);
     const navigate=useNavigate();

    let setIsLoggedIn=props.setIsLoggedIn;

    const handleButtonClick=()=>{
       console.log(email.current.value);
       console.log(password.current.value);

       const message=checkValidData(email.current.value,password.current.value)
       seterrorMessage(message);

       if(message) return;
       signInWithEmailAndPassword(auth,email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    seterrorMessage(errorCode+"-"+errorMessage)
  });
    }
    const signUpUser=()=>{
        navigate("/signup");
    }
  return (
    <div>
   <form onSubmit={(e)=>e.preventDefault()} className='w-[370px] absolute p-12 bg-blue-700 my-36 mx-auto right-0 left-0 text-white rounded-lg mt-[100px] '>
   <h2 className='font-bold text-xl py-2 text-yellow-400'>Join the CRICINFO family</h2>
   <input required type="text" ref={email} placeholder="Email Address" className='p-2 my-5 w-full bg-transparent border rounded-3xl placeholder:font-bold ' />
   <input required type="password" ref={password} placeholder='Password ' className='p-2 my-5 w-full bg-transparent border rounded-3xl placeholder:font-bold'/>
   <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
   <div className='flex flex-col space-y-0 my-5 mb-[-10px]'>
   
   <button className='w-full py-1 px-auto text-black bg-yellow-400 rounded-3xl ' onClick={handleButtonClick}>LOGIN</button>
   <p className='py-4 cursor-pointer font-bold text-sm self-center' onClick={signUpUser}>New to CRICINFO?Sign Up</p>
   </div>
   </form>
    </div>
  )
}

export default Login
