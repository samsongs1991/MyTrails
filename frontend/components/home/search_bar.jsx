import React from "react";

const SearchBar = props => {
    return (
        <form id="search-bar">
            <img src="/home_images/search_icon.png" alt="Search Icon"/>
            <input list="dropdown" placeholder="Search by city, park, or trail name"/>
            <datalist id="dropdown">
                <option value="testing"/>
            </datalist>
            <img src="/home_images/arrow.png" alt="Submit"/>
        </form>
    );
};

export default SearchBar;