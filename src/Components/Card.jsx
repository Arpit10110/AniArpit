import React from 'react'
import "../Style/Card.css"
import {useNavigate} from "react-router-dom"
const Card = ({title,id,releaseDate,image}) => {
    const Navigate = useNavigate();
    const nav=()=>{
        const customNavigate=  `/${encodeURIComponent(title)}/${id}`;
        Navigate(customNavigate)
    }
  return (
   <div className="card" id={id} onClick={nav}>
        <img src={image} alt={title} />
        <div className='card-cont'>
            <h1>{title}</h1>
            <h3>{releaseDate}</h3>
        </div>
   </div>
  )
}

export default Card
