import React, { useState } from "react";

const FilterDifficulty = ({ options, setOptions }) => {
    const [showModal, setShowModal] = useState(false);

    const modal = () => {
        const handleCheck = e => {
            let newDifficulty;
            switch(e.target.value) {
                case "easy":
                    const easy = options.difficulty.easy;
                    newDifficulty = Object.assign({}, options.difficulty, { easy: !easy });
                    break;
                case "moderate":
                    const moderate = options.difficulty.moderate;
                    newDifficulty = Object.assign({}, options.difficulty, { moderate: !moderate });
                    break;
                case "hard":
                    const hard = options.difficulty.hard;
                    newDifficulty = Object.assign({}, options.difficulty, { hard: !hard });
                    break;
            }
            setOptions(Object.assign({}, options, { difficulty: newDifficulty }));
        };
        
        return (
            <form id="form-difficulty">
                <label><input
                    value="easy"
                    type="checkbox"
                    onClick={handleCheck}
                />Easy</label>
                <label><input
                    value="moderate"
                    type="checkbox"
                    onClick={handleCheck}
                />Moderate</label>
                <label><input
                    value="hard"
                    type="checkbox"
                    onClick={handleCheck}
                />Hard</label>
            </form>
        );
    };

    const handleModal = e => {
        const arrow = document.getElementById("difficulty-arrow");
        if(showModal) {
            arrow.classList.remove("active");
        } else {
            arrow.classList.add("active");
        }
        setShowModal(!showModal);
    };
    
    return (
        <div>
            <button onClick={handleModal}>
                Difficulty
                <img id="difficulty-arrow" src="/explore_images/menu-arrow.png" alt="menu arrow"/>
            </button>
            {showModal ? modal() : null}
        </div>
    );
};

export default FilterDifficulty;