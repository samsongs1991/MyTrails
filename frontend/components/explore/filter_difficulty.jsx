import React from "react";

const FilterDifficulty = ({  }) => {

    const handleModal = e => {
        console.log("difficulty", e.target);
    };
    
    return (
        <div>
            <button onClick={handleModal}>
                Difficulty
                <img className="modal-arrow" src="/explore_images/menu-arrow.png" alt="menu arrow"/>
            </button>
        </div>
    );
};

export default FilterDifficulty;