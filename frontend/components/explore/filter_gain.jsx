import React, { useState } from "react";

const FilterGain = ({ options, setOptions }) => {

    const modal = () => {
        const [min, setMin] = useState(options.gain.min);
        const [max, setMax] = useState(options.gain.max);

        const handleRange = e => {
            let rangeMin = min;
            let rangeMax = max;
            if(e.target.id === "gain-min") {
                rangeMin = Number(e.target.value);
                if(!(rangeMin >= 0)) {
                    rangeMin = min;
                }
                setMin(rangeMin);
            } else {
                rangeMax = Number(e.target.value);
                if(!(rangeMax >= 0)) {
                    rangeMax = max;
                }
                setMax(rangeMax);
            }

            if(rangeMin <= rangeMax) {
                document.getElementById("gain-min").classList.remove("error");
                document.getElementById("gain-max").classList.remove("error");
                const newGain = { min: rangeMin, max: rangeMax };
                setOptions(Object.assign({}, options, { gain: newGain }));
            } else {
                document.getElementById("gain-min").classList.add("error");
                document.getElementById("gain-max").classList.add("error");
            }
        } ;

        return (
            <form id="gain-form" className="form-modal" onClick={e => e.stopPropagation()}>
                <input id="gain-min" onChange={handleRange} placeholder="min" value={min}/>
                to
                <input id="gain-max" onChange={handleRange} placeholder="max" value={max}/>
                feet
            </form>
        );
    };

    const handleModal = e => {
        e.stopPropagation();
        const form = document.getElementById("gain-form");
        const arrow = document.getElementById("gain-arrow");
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
            if(formModals[i].id !== "gain-form") {
                formModals[i].classList.remove("show");
                filterArrows[i].classList.remove("active");
            }
        }
    };

    return (
        <div>
            <button id="gain-btn" onClick={handleModal}>
                Gain
                <img id="gain-arrow" className="filter-arrow" src={images.menu_arrow} alt="menu arrow"/>
            </button>
            {modal()}
        </div>
    );
};

export default FilterGain;
