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
?playerIndData.teams.split(", ").slice(0, 6) : "No teams available";
console.log(filteredTeams);

    
  return (
    <div className="w-screen h-auto bg-gradient-to-b from-[#32529F] to-[#121D39] -z-30 relative mt-0 flex ">
    <img src="https://ucarecdn.com/1c020b2d-fc27-48a1-8d76-cad2c1136850/-/preview/405x577/" alt="" className='absolute mx-[-100px] opacity-20 h-[450px] w-[450px]'/>
    <img src="https://ucarecdn.com/1c020b2d-fc27-48a1-8d76-cad2c1136850/-/preview/405x577/" alt="" className='absolute mx-[-100px] opacity-20 h-[500px] w-[500px]'/>
        <div className='w-[327.8px] h-[512.31px] text-white pl-[20px] mt-[91.49px] mx-[22.09px]'>
            <div className='w-full h-[262.94px]'>
            <div className=' tracking-tight text-7xl w-full h-[160px]'>{playerIndData.name }</div>
            <div className='uppercase w-[195px] h-auto bg-[#3F61A5] rounded-3xl  py-2 px-3 text-center '>Indian {playerIndData.role }</div>
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
        <div className='w-[720px] h-full mt-2'>
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
        <div className='w-1/3 mr-14  mt-[81.49px] ml-4'>
        <div className=' h-[192px] text-white bg-[#3F61A5] bg-blend-soft-light px-5 flex flex-col justify-around mr-[10px] rounded-lg'>
            <div className='text-white font-semibold tracking-wide'><div className='opacity-80'>FULL NAME<br /></div> {playerIndData.name }</div>
                <div className='text-white font-semibold'><div className='opacity-80'>DOB <br /></div>{playerIndData.DoB }</div>
                <div className='text-white font-semibold' ><div className='opacity-80'>BIRTHPLACE <br /></div>{playerIndData.birthPlace}</div>
            </div>
            <div className=' h-auto text-white  bg-[#3F61A5] bg-blend-soft-light mt-6 mr-[10px] rounded-lg '><div className='opacity-80 px-5 pt-2'>TEAMS</div>
            <div className='grid grid-cols-2 grid-rows-3  px-5 font-semibold pt-2 gap-4'>
              <div className=' text-white'>{filteredTeams[0]}</div>
              <div className=' text-white'>{filteredTeams[1]}</div>
              <div className=' text-white'>{filteredTeams[2]}</div>
              <div className=' text-white'>{filteredTeams[3]}</div>
              <div className=' text-white'>{filteredTeams[4]}</div>
              <div className=' text-white'>{filteredTeams[5]}</div>
              </div>
              </div>

             
            
            
        </div>
        {/* <img src="https://ucarecdn.com/cf4fa520-5d83-4efd-87bc-246cfb2d70d1/-/preview/643x95/" alt="" className='absolute my-[0px]  mx-[800px] opacity-20 h-[90px] w-[90px]'/>
        <img src="https://ucarecdn.com/cf4fa520-5d83-4efd-87bc-246cfb2d70d1/-/preview/643x95/" alt="" className='absolute my-[0px] mx-[800px] opacity-20 h-[100px] w-[100px]'/> */}

         </div>
  )
}



export default PrimaryContainer
