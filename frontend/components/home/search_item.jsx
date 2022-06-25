import React from "react";

const SearchItem = ({ trail }) => {
    return (
        <li>
            <img src="/home_images/location_icon.png" alt="Location Icon"/>
            <article>
                <div>{trail.name} - {trail.difficulty}</div>
                <div>{trail.location}, {trail.city}, {trail.state}</div>
            </article>
        </li>
    );
};

export default SearchItem;