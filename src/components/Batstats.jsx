import React from 'react'
import { useLocation } from 'react-router-dom'
import useIndiaBatStats from '../../hooks/useIndiaBatStats';
import { useSelector } from 'react-redux';

const Batstats = () => {
    const location=useLocation();
    const {id}=location.state||{};
    useIndiaBatStats({id})
    console.log("dekh id batstat mai")
    console.log(id)
    const playerIndBatStat=useSelector(
        store=>store.cricbat?.currIndBatStats
    )
    console.log("see batting stats",playerIndBatStat)
    if(!playerIndBatStat)
    {
        return <div className='text-white'>Nhi Mila Bat Stat.....</div>
    }
    const headers=playerIndBatStat.headers;
    const rows=playerIndBatStat.values;
    console.log("dekho header")
    console.log(headers)
    console.log("dekho rows")
    console.log(rows)
  return (
    <div className='overflow-x-auto'>
        <div className='text-white font-semibold'>Batting Statistics</div>
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

export default Batstats
