import React from 'react'
import usePlayerImages from '../../hooks/usePlayerImages'
import { useSelector } from 'react-redux'

const NewsCard = ({hline,imageId}) => {
  usePlayerImages({imageId})

  const playerIndImg=useSelector(
    (store)=>store.cricteams?.currIndPlayersImages?.[imageId]
  );
  const imageUrl=usePlayerImages({imageId});
  console.log("SEE IMAGE URL IN NEWS CARD")
  console.log("dekh image ki url:",imageUrl);

  const finalImageUrl=imageUrl||playerIndImg;
  console.log("dekho final image url")
  console.log(finalImageUrl)

  console.log("dekho id news m")
  console.log({imageId});
  console.log("dekho headline")
  console.log({hline})
  return (
    <div>
      
          <div className='  mb-10'>
             {finalImageUrl ? (
              <div className='w-[280px]'>
              <img
                className=" h-[195px]  object-cover  z-50  w-full rounded-3xl"
                src={finalImageUrl}
                alt='NO IMAGE'
              />
              <div className='text-white font-bold mr-10 absolute mt-[-72px] pr-2 mb-3 pl-2 w-[280px]'>{hline}</div>
              </div>
            ) : (
              <p>Loading...</p>
            )} 
             {/* <div className='text-white font-semibold mr-10 absolute mt-[-60px] w-'>{hline}</div> */}
          </div>
         
    </div>
  )
}

export default NewsCard

