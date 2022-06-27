import React from "react";
import { Link } from "react-router-dom";

const Card = ({ trail }) => {
    return (
        <Link to={`/trails/${trail.id}`}>
            <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/shutterstock_1200681070.jpg" alt={`Image of ${trail.location}`}/>
            <div><span className={trail.difficulty}>{trail.difficulty}</span> • <img src="/home_images/star_icon.png" alt="Star"/> 5.0</div>
            <div>{trail.name}</div>
            <div>{trail.city}, {trail.state}</div>
            <div>Length: {trail.length} mi • Est. 100min</div>
        </Link>
    );
};

export default Card;