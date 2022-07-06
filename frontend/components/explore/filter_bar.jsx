import React, { useState } from "react";
import SearchBar from "../home/search_bar.jsx";
import FilterOption from "./filter_option.jsx";

const FilterBar = ({ options, setOptions, history }) => {

    const [difficulty, setDifficulty] = useState(options.difficulty);
    const [length, setLength] = useState(options.length);
    const [gain, setGain] = useState(options.gain);
    const [time, setTime] = useState(options.time);
    const [category, setCategory] = useState(options.category);
    const [rating, setRating] = useState(options.rating);
    
    return (
        <section id="filter-bar">
            <SearchBar history={history}/>
            <FilterOption type="difficulty" input={difficulty} setInput={setDifficulty}/>
            <FilterOption type="length" input={length} setInput={setLength}/>
            <FilterOption type="gain" input={gain} setInput={setGain}/>
            <FilterOption type="time" input={time} setInput={setTime}/>
            <FilterOption type="category" input={category} setInput={setCategory}/>
            <FilterOption type="rating" input={rating} setInput={setRating}/>
        </section>
    );
};

export default FilterBar;