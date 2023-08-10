import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {
    const [data , setData] = useState([])
    const [loading , setIsLoading] = useState(false)
    const [error , setError] = useState("")

const infinniteScroll = ()=>{
    const height = window.innerHeight
    console.log("full height" , height)
    const {scrollHeight , scrollTop} = document.documentElement;
    console.log("scrollHeight" , scrollHeight)
    console.log("scrollTop" , scrollTop)
}

useEffect(()=>{
window.addEventListener("scroll" , infinniteScroll)
},[])
    useEffect(()=>{
        infinniteScroll()
        getData()
    },[])
    let getData =async()=>{
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=10")
        let res = await response.data
        setData(res)
    }

  return (
    <>
    <Card data={data}/>
    </>
   
  )
}

export default Home