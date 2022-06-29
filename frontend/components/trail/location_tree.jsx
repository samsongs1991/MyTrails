import React from "react";
import SearchBar from "../home/search_bar.jsx";

const LocationTree = ({ trail }) => {

    const locationString = () => {
        if(trail) {
            const arr = [
                <span>{trail.country}</span>,
                <span>{">"}</span>, 
                <span>{trail.state}</span>,
                <span>{">"}</span>, 
                <span>{trail.city}</span>,
                <span>{">"}</span>, 
                <span>{trail.location}</span>,
                <span>{">"}</span>,
                <span>{trail.name}</span>
            ];

            return arr;
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