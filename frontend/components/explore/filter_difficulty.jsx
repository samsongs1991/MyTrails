import React from "react";

const FilterDifficulty = ({ options, setOptions }) => {

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
            <form id="difficulty-form" className="form-modal" onClick={e => e.stopPropagation()}>
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
        e.stopPropagation();
        const form = document.getElementById("difficulty-form");
        const arrow = document.getElementById("difficulty-arrow");
        if(form.classList.contains("show")) {
            form.classList.remove("show");
            arrow.classList.remove("active");
        } else {
            form.classList.add("show");
            arrow.classList.add("active");
        }
        const formModals = document.getElementsByClassName("form-modal");
        const filterArrows = document.getElementsByClassName("filter-arrow");
        for(let i = 0; i < formModals.length; i++) {
            if(formModals[i].id !== "difficulty-form") {
                formModals[i].classList.remove("show");
                filterArrows[i].classList.remove("active");
            }
        }
    };

    return (
        <div>
            <button id="difficulty-btn" onClick={handleModal}>
                Difficulty
                <img id="difficulty-arrow" className="filter-arrow" src={images.menu_arrow} alt="menu arrow"/>
            </button>
            {modal()}
        </div>
    );
};

export default FilterDifficulty;
