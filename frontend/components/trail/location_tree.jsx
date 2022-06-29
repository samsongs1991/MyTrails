import React from "react";
import SearchBar from "../home/search_bar.jsx";

const LocationTree = ({ trail }) => {

    const locationString = () => {
        if(trail) {
            const arr = [
                trail.country, 
                trail.state, 
                trail.city, 
                trail.location,
                trail.name
            ];

            return arr.join(" > ");
        }   
    };
    
    return trail ? (
        <article id="location-tree">
            <div>{locationString()}</div>
            <SearchBar/>
        </article>
    ) : null;
};

export default LocationTree;