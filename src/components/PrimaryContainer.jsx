import React from 'react'
import { useLocation } from 'react-router-dom'
import useIndiaData from '../../hooks/useIndiaData';
import useIndiaProfileData from '../../hooks/useIndiaProfileData';
import { useSelector } from 'react-redux';

const PrimaryContainer = () => {
  
    const location=useLocation()
    const{finalImageUrl,name,id}=location.state||{};
    console.log("dekkho id container m")
    console.log(id)
    useIndiaProfileData({id})
const playerIndData=useSelector(
    (store)=>store.cricprof?.currIndPlayersData
)
console.log("see player india data",playerIndData)
if (!playerIndData) {
  return <div>Loading player data...</div>;
}



const filteredTeams =  playerIndData?.teams
?playerIndData.teams.split(", ").slice(0, 6).join(" ")   : "No teams available";
console.log(filteredTeams);

    
  return (
    <div className="w-screen h-auto bg-gradient-to-b from-[#32529F] to-[#121D39] -z-30 relative mt-0 flex ">
        <div className='w-[327.8px] h-[512.31px] text-white pl-[20px] mt-[91.49px] mx-[22.09px]'>
            <div className='w-full h-[262.94px]'>
            <div className=' tracking-tight text-7xl w-full h-[160px]'>{playerIndData.name }</div>
            <div className='uppercase w-[195px] h-[40px] bg-[#3F61A5] rounded-3xl  py-2 px-3 text-center '>Indian {playerIndData.role }</div>
            </div>
            <div className='w-[289.91px] h-[150.77px]'>
            <div className='flex w-[200.95px] h-[40.51px] gap-x-2'>
              
              <img src="https://ucarecdn.com/9a55ef55-3834-4399-a248-c9e48f20bd92/-/preview/31x32/" alt="" className='w-[34.04px] h-[35.75px]'  />
               <div className='leading-[17px] text-[16px]'> { `${playerIndData.bat}sman`}</div>
            </div>
            <div  className='flex w-[200.95px] h-[40.51px] gap-x-2 mt-2' >
              <img src="https://ucarecdn.com/52a5fb45-338a-434a-ad05-827b71317fbc/-/preview/31x32/" alt=""  className='w-[34.04px] h-[35.75px] '/>
            <div  className='leading-[17px] text-[16px]'>{`${playerIndData.bowl} Bowler`}</div>
            </div>
          
            </div>
            {/* <div className='grid grid-cols-2 grid-rows-3 '>{filteredTeams}</div> */}
        </div>
        <div className='w-[600px]  '>
           {finalImageUrl ? (
            <img
              className=" w-screen object-cover  z-50  "
              src={finalImageUrl}
              alt={`${name }'s Image`}
            />
          ) : (
            <p>Loading...</p>
          )} 
        </div>
        <div className='w-1/3 text-white'>

            <div className='grid grid-cols-2 grid-rows-3 '>{filteredTeams}</div>
            <div>
            <div className='text-white'>{playerIndData.name }</div>
                <div className='text-white'>{playerIndData.DoB }</div>
                <div className='text-white' >{playerIndData.birthPlace}</div>
            </div>
            
        </div>
         </div>
  )
}



export default PrimaryContainer
