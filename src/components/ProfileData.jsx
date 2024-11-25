import React from 'react'
import Profile from './Profile'
import PrimaryContainer from './PrimaryContainer'
import { useLocation } from 'react-router-dom'
import useIndiaNews from '../../hooks/useIndiaNews'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import Batstats from './Batstats'
import Bowlstats from './Bowlstats'
import useIndiaProfileData from '../../hooks/useIndiaProfileData'
import useIndiaBatStats from '../../hooks/useIndiaBatStats'
import useIndiaBowlStats from '../../hooks/useIndiaBowlStats'

const ProfileData = () => {


  const location=useLocation()
  const{id,finalImageUrl,battingStyle,bowlingStyle,name}=location.state||{};
  console.log("dekho id profile data m")
  console.log(id);
  useIndiaNews({id})
  useIndiaProfileData({id})
  useIndiaBatStats({id})
  useIndiaBowlStats({id})
  const playerIndNews=useSelector(
    (store)=>store.cricnews?.currIndPlayersNews?.storyList
  )
 console.log("news in profile data")
 console.log(playerIndNews)
//  const topnews=playerIndNews.slice(0,4);
const topnews = Array.isArray(playerIndNews) ? playerIndNews.slice(8,13) : [];
// const newsPlayer=topnews.entitlements;
// console.log("see image id")
// if(!topnews.story.imageId)
// {
//   return <div>No image id</div>
// }
// console.log("see image id")
// console.log(topnews.story?.imageId)
// console.log("headline")
// console.log(topnews.story?.hline)
const playerIndData=useSelector(
  (store)=>store.cricprof?.currIndPlayersData
)
console.log("see player india data",playerIndData)
if (!playerIndData) {
return <div>Loading player data...</div>;
}


 console.log("dekho 4 news")
 console.log(topnews)
  return (
  <div className='w-screen overflow-x-hidden'>
    <div className=''>
        <PrimaryContainer/>
  {/* <Profile/> */}
    </div>
    <div className='flex w-screen bg-black'>
    <div className='w-[75%] h-auto ml-[50px]'>
      <div className='text-white'>{playerIndData.name} Profile</div>
      <div className='text-white'>
        {playerIndData.bio.split(' ').slice(0, 50).join(' ') + '...'}
      </div>

      <div>
        <Batstats/>
      </div>
      <div>
        <Bowlstats/>
      </div>
    </div>
    <div className='w-[45%] flex '>
      {/* <div className='w-[22%]'>

      </div> */}
      <div className='flex flex-col gap-y-5 '>
    <div className='pl-[120px]' >
      <Profile/>
    </div>
    <div className='relative mt-[370px] pl-[120px]'>
    <div className=' text-center bg-blend-soft-light font-bold bg-gray-900  text-white px-auto w-[280px] mb-2 mt-2 rounded-md py-1 border'>News</div>
      {Array.isArray(topnews) && topnews?.map((news)=>(
        <NewsCard key={news.story?.id} hline={news.story?.hline} imageId={news.story?.imageId}/>
      ))}
      <div className=' text-center bg-blend-soft-light font-bold bg-gray-900  text-white px-auto w-[280px] mb-2 mt-[-30px] rounded-md py-1 border'>News</div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ProfileData
