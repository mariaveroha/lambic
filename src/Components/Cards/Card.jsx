import React from "react";
import img from "../../images/Rectangle 133.svg"
import "./Card.scss"

const Card = (props) => {
    return (
        <div className='card'>
            <div> <img src={img} alt="Пиво" className='image' /></div>
            <div> <a href="#" className='href'> <p className='title'> {props.card.title} </p> </a></div>
            <div className='body'> {props.card.body}</div>
            <div className='time'> {props.card.time}</div>
        </div>
    )
}
export default Card