import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ trail, setModalHidden, setInput }) => {

    const handleClick = e => {
        e.stopPropagation();
        setModalHidden(true);
        setInput(trail.name);
    };

    return (
        <Link to={`/trails/${trail.id}`} onClick={handleClick}>
            <img src={images.marker_icon} alt="Location Icon"/>
            <article>
                <div>{trail.name}</div>
                <div>{trail.location}, {trail.city}, {trail.state}</div>
            </article>
        </Link>
    );
};


export default SearchItem;
