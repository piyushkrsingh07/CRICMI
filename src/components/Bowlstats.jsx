import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import useIndiaBowlStats from '../../hooks/useIndiaBowlStats';
import { useSelector } from 'react-redux';

const Bowlstats = () => {
    const location=useLocation();
    const {id}=location.state||{};
    useIndiaBowlStats({id})
    console.log("dekh id bowl stat m")
    console.log(id)

    const playerIndBowlStat=useSelector(
        store=>store.cricprof?.currIndBowlStats
    )
    console.log("see bowling stats",playerIndBowlStat)
    if(!playerIndBowlStat){
      <div className='text-white'>Nhi mila data</div>
    }
    const headers=playerIndBowlStat.headers;
    const rows=playerIndBowlStat.values;
    console.log("dekho header")
    console.log(headers)
    console.log(" dekho rows")
    console.log(rows)


  return (
    <div>
         <div className='text-white font-semibold'>Bowling Statistics</div>
        <table className='text-white border-collapse  w-full text-center bg-blue-950 bg-blend-soft-light'>
            <thead>
                <tr>
                {headers.map((header, index) => (
              <th key={index} className=" px-4 py-2">
                {header}
              </th>
            ))}
                </tr>
            </thead>
        <tbody>
        {rows?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.values.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-opacity-15 px-4 py-2 "
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
      
      
    </div>
  )
}

export default Bowlstats
