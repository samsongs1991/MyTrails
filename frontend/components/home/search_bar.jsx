import React from "react";
import { connect } from "react-redux";

const SearchBar = ({ trails }) => {    
    return (
        <form id="search-bar">
            <img src="/home_images/search_icon.png" alt="Search Icon"/>
            <input list="dropdown" placeholder="Search by city, park, or trail name"/>
            <datalist id="dropdown">
                {/* {trails.map((trail, i) => <option key={i} value="trail.name"/>)} */}
            </datalist>
            <img src="/home_images/arrow.png" alt="Submit"/>
        </form>
    );
};

const mSTP = state => ({
    // trails: state.entities.trails
});

export default connect(mSTP)(SearchBar);