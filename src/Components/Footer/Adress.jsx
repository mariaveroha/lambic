import React from "react";
import  "./Adress.scss"
const Adress = (props) => {

    return (
        <p className='adress'> {props.adress.description}</p>
    )
}

export default Adress