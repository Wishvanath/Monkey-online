import React from 'react';
import './card.style.css';
const Card = (props) => {


    // return main component
    return(
        <div className="card-container">
            {/* {JSON.stringify(props)} */}
            <img className ="avt_image" src={`https://robohash.org/${props.monkey.id}?set=set`} alt=""/>
            <h3>{props.monkey.name}</h3>
            <span>{props.monkey.email}</span>
        </div>
    )
}

export default Card;