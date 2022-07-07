import React from "react";
import SearchBar from "../home/search_bar.jsx";
import FilterDifficulty from "./filter_difficulty.jsx";
import FilterLength from "./filter_length.jsx";
import FilterGain from "./filter_gain.jsx";
import FilterTime from "./filter_time.jsx";
import FilterCategory from "./filter_category.jsx";
import FilterRating from "./filter_rating.jsx";

const FilterBar = ({ options, setOptions, history }) => {

    return (
        <section id="filter-bar">
            <SearchBar history={history}/>
            <FilterDifficulty options={options} setOptions={setOptions}/>
            <FilterLength options={options} setOptions={setOptions}/>
            {/* <FilterGain/> */}
            {/* <FilterTime/> */}
            {/* <FilterCategory/> */}
            {/* <FilterRating/> */}
        </section>
    );
};

export default FilterBar;