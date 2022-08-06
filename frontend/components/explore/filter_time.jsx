import React, { useState } from "react";

const FilterTime = ({ options, setOptions }) => {

    const modal = () => {
        const [min, setMin] = useState(options.time.min);
        const [max, setMax] = useState(options.time.max);

        const handleRange = e => {
            let rangeMin = min;
            let rangeMax = max;
            if(e.target.id === "time-min") {
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
                document.getElementById("time-min").classList.remove("error");
                document.getElementById("time-max").classList.remove("error");
                const newTime = { min: rangeMin, max: rangeMax };
                setOptions(Object.assign({}, options, { time: newTime }));
            } else {
                document.getElementById("time-min").classList.add("error");
                document.getElementById("time-max").classList.add("error");
            }
        } ;

        return (
            <form id="time-form" className="form-modal" onClick={e => e.stopPropagation()}>
                <input id="time-min" onChange={handleRange} placeholder="min" value={min}/>
                to
                <input id="time-max" onChange={handleRange} placeholder="max" value={max}/>
                minutes
            </form>
        );
    };

    const handleModal = e => {
        e.stopPropagation();
        const form = document.getElementById("time-form");
        const arrow = document.getElementById("time-arrow");
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
            if(formModals[i].id !== "time-form") {
                formModals[i].classList.remove("show");
                filterArrows[i].classList.remove("active");
            }
        }
    };

    return (
        <div>
            <button id="time-btn" onClick={handleModal}>
                Time
                <img id="time-arrow" className="filter-arrow" src={images.menu_arrow} alt="menu arrow"/>
            </button>
            {modal()}
        </div>
    );
};

export default FilterTime;
