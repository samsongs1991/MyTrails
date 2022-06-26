import React from "react";

const SearchItem = ({ trail }) => {

    const handleItem = e => {
        e.stopPropagation();
        // link to trail show page
    };
    
    return (
        <li onClick={handleItem}>
            <img src="/home_images/location_icon.png" alt="Location Icon"/>
            <article>
                <div>{trail.name}</div>
                <div>{trail.location}, {trail.city}, {trail.state}</div>
            </article>
        </li>
    );
};

export default SearchItem;