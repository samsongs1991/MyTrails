import React from "react";

const FilterLength = ({ options, setOptions }) => {

    const modal = () => {        
        return (
            <form id="length-form" className="form-modal" onClick={e => e.stopPropagation()}>
                FILTER LENGTH MODAL
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