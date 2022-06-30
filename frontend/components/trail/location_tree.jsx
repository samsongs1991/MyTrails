import React from "react";
import SearchBar from "../home/search_bar.jsx";

const LocationTree = ({ trail, history }) => {

    const locationArr = () => {
        if(trail) {
            const arr = [
                trail.country, ">", 
                trail.state, ">", 
                trail.city, ">", 
                trail.location, ">",
                trail.name
            ];
            return arr;
        } else {
            return [];
        }
    };
    
    return (
        <article id="location-tree">
            <div>{locationArr().map((str, i) => <span key={i}>{str}</span>)}</div>
            <SearchBar history={history}/>
        </article>
    );
};

export default LocationTree;