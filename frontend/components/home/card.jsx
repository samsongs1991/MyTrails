import React from "react";
import { Link } from "react-router-dom";

const Card = ({ trail }) => {
    return (
        <article>
            <Link to={`/trails/${trail.id}`}>
                <img src="" alt={`Image of ${trail.location}`}/>
                <div>{trail.difficulty} - <img src="" alt="Star"/>5.0</div>
                <div>{trail.location}</div>
                <div>{trail.city}, {trail.state}</div>
                <div>Length: {trail.length} mi - Est. 100min</div>
            </Link>
        </article>
    );
};

export default Card;