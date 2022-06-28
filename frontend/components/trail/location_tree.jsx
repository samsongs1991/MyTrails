import React from "react";

const LocationTree = ({ trail }) => {

    const locations = [
        trail.country, 
        trail.state, 
        trail.city, 
        trail.location,
        trail.name
    ]; 
    
    return trail ? (
        <article>
            <div>{locations.join(" > ")}</div>
            <div>search bar</div>
        </article>
    ) : null;
};

export default LocationTree;