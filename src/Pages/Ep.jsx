import React from 'react'
import { useEffect } from 'react';
import {useParams} from "react-router-dom"
import { ANIME } from "@consumet/extensions"
import { useState } from 'react';
import EpCard from "../Components/EpCard.jsx"
import "../Style/Ep.css"
const Ep = () => {
    const { id, title } = useParams();
    const [Ep,SetEp]= useState([])
    const [ Loading,SetLoading]= useState(true)
    const [image,Setimage]= useState([])
    const getep = async()=>{
        const gogoanime = new ANIME.Gogoanime();
             // get epoisode
            try {
            const data=await gogoanime.fetchAnimeInfo(id)
                const episode=data.episodes;
                const img=data.image;
                Setimage(img)
                SetEp(episode)
                SetLoading(false)
            } catch (error) {
                console.log(error)
            }
        
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    getep();
    }, [])
    
  return (
    <div className='Ep-wrapper' >
        {
            Loading==true?<div className='loading-div'><h2>Loading...</h2></div>:
            Ep.map((i,index)=>{
                    return(
                        <EpCard key={index} image={image} id={i.id} epnumber={i.number} title={title}/>
                    )
            })
        }
    </div>
  )
}

export default Ep
