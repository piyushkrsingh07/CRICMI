import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../src/utils/constants'
import { addCurrIndPlayersNews } from '../src/redux/Slices/newsSlice'

const useIndiaNews = ({id}) => {
    console.log("dekho id news hook m")
    console.log(id)
    const dispatch=useDispatch()
    const getIndiaPlayerNews=async()=>{
        try{
            const data=await fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/player/'+id,API_OPTIONS)
            const json=await data.json()
            console.log("dekho news")
            console.log(json)
            dispatch(addCurrIndPlayersNews(json))
            

        }
        catch(error){
             console.log("error in fetching news",error)
        }
    }
    useEffect(()=>{
        getIndiaPlayerNews()
    },[id,dispatch])
  
}

export default useIndiaNews
