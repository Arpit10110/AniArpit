import React,{useEffect} from 'react'
import { ANIME } from "@consumet/extensions"
import { useState } from 'react'
import Card from '../Components/Card.jsx'
import "../Style/Home.css"
const Home = () => {
    const [FP, SetFP] = useState([])
    const [ Loading,SetLoading]= useState(true)
    const getdata = async()=>{ 
        const gogoanime = new ANIME.Gogoanime();
        // get anime
        try {
            const data = await gogoanime.search("jujutsu kaisen");
            console.log("Fetched data:", data.results); // Log the fetched data
            const result=data.results
            SetFP(result);
            SetLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
}
    useEffect(() => {
      getdata();
    }, [])
  return (
   <>
        <div className="home-wrapper">
            {
        Loading==true?<div className='loading-div'><h2>Loading...</h2></div>:
                FP.map((i,index)=>{
                    return(
                       <Card key={index} title={i.title} id={i.id} image={i.image}  releaseDate={i.releaseDate}  />
                    )
                })
            }
        </div>
   </>
  )
}

export default Home
