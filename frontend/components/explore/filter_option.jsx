import React from "react";

const FilterOption = ({ type, input, setInput }) => {
    return (
        <div>
            <button>{type}</button>
        </div>
    );
};

export default FilterOption;