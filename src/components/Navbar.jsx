import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    let IsLoggedIn=props.IsLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
  
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between bg-blue-700'>
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




    </div>
 
  )
}

export default Navbar
