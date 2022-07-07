import React, { useState } from "react";

const FilterLength = ({ options, setOptions }) => {

    const modal = () => {
        const [min, setMin] = useState(options.length.min);
        const [max, setMax] = useState(options.length.max);

        const handleRange = e => {
            let rangeMin = min;
            let rangeMax = max;
            if(e.target.id === "min") {
                rangeMin = Number(e.target.value);
                setMin(rangeMin);
            } else {
                rangeMax = Number(e.target.value);
                setMax(rangeMax);
            }

            const val = Number(e.target.value);
            if(val >= 0 && rangeMin <= rangeMax) {
                document.getElementById("min").classList.remove("error");
                document.getElementById("max").classList.remove("error");
                const newLength = { min: rangeMin, max: rangeMax };
                setOptions(Object.assign({}, options, { length: newLength }));
            } else {
                document.getElementById("min").classList.add("error");
                document.getElementById("max").classList.add("error");
            }
        } ;

        return (
            <form id="length-form" className="form-modal" onClick={e => e.stopPropagation()}>
                <input id="min" onChange={handleRange} placeholder="min" value={min}/>
                to
                <input id="max" onChange={handleRange} placeholder="max" value={max}/>
                miles
            </form>
        );
    };

    const handleModal = e => {
        e.stopPropagation();
        const form = document.getElementById("length-form");
        const arrow = document.getElementById("length-arrow");
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
            if(formModals[i].id !== "length-form") {
                formModals[i].classList.remove("show");
                filterArrows[i].classList.remove("active");
            }
        }
    };
    
    return (
        <div>
            <button id="length-btn" onClick={handleModal}>
                Length
                <img id="length-arrow" className="filter-arrow" src="/explore_images/menu-arrow.png" alt="menu arrow"/>
            </button>
            {modal()}
        </div>
    );
};

export default FilterLength;