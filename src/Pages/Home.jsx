import React,{useEffect} from 'react'
import { ANIME } from "@consumet/extensions"
import { useState } from 'react'
import Card from '../Components/Card.jsx'
import "../Style/Home.css"
const Home = () => {
    const [FP, SetFP] = useState([])
    const [ Loading,SetLoading]= useState(true)
    const [InSearch,SetInSearch] = useState("");
    const [LValue,SetLValue]= useState("Loading...")
    const getdata = async()=>{ 
        SetLoading(true)
        SetLValue("Loading...")
        let Search="";
        if(InSearch=="")
        {
            Search="jujutsu kaisen"
        }
        else{
            Search=InSearch
        }
        const gogoanime = new ANIME.Gogoanime();
        // get anime
        try {
            const data = await gogoanime.search(Search);
            const result=data.results
            if(result.length==0){
            SetLValue("Something went wrong...")
            SetLoading(true)
            }
            else{
                SetFP(result);
                SetLoading(false)
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            SetLValue("Something went wrong...")
        }
}
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title="AniArpit | Home"
      getdata();
    }, [])
  return (
   <>
       <div className="search">
        <input type="text" value={InSearch} onChange={(e)=>{
            SetInSearch(e.target.value);
        }} onKeyDown={(e)=>{
            if(e.key === 'Enter'){
                getdata();
            }
        }} placeholder='Search for your favorite anime...' />
        </div>
        <div className="home-wrapper">
            {
        Loading==true?<div className='loading-div'><h2>{LValue}</h2></div>:
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
