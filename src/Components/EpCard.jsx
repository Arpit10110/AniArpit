import React from 'react'
import "../Style/Epcard.css"
import { ANIME } from "@consumet/extensions"
const EpCard = ({title,id,epnumber,image}) => {
    const watchnow =async()=>{
        const gogoanime = new ANIME.Gogoanime();
          // get url
          try {
            const results =await gogoanime.fetchEpisodeServers(id,epnumber,title)
            const url=results[0].url;
            window.open(url,"_self")
          } catch (error) {
            
          }
    }
  return (
    <div className="Epcard" id={id}>
    <img src={image} alt={title} />
    <div className='Epcard-cont'>
        <h1>{title}</h1>
        <h2>Episode no:-{epnumber}</h2>
        <button onClick={watchnow} >Watch now</button>
    </div>
</div>
  )
}

export default EpCard
