import React, { useState, useEffect } from "react";
import * as Modals from "./filter_modals.jsx";

const FilterOption = ({ type, input, setInput }) => {

    const [showModal, setShowModal] = useState(false);

    const hideModal = e => {
        const btn = document.getElementById(type);
        if(e.target !== btn && e.target.className !== "modal-arrow") {
            const arrows = document.getElementsByClassName("modal-arrow");
            for(let i = 0; i < arrows.length; i++) {
                arrows[i].classList.remove("active");
            }
            setShowModal(false);
        }
    };

    const handleModal = e => {
        if(showModal) {
            e.target.children[0].classList.remove("active");
        } else {
            e.target.children[0].classList.add("active");
        }
        setShowModal(!showModal);
    };

    useEffect(() => {
        const explorePage = document.getElementById("explore-page");
        explorePage.addEventListener("click", hideModal);
    }, []);
    
    return (
        <div>
            <button id={type} onClick={handleModal}>
                {type}
                <img className="modal-arrow" src="/explore_images/menu-arrow.png" alt="menu arrow"/>
            </button>
            {showModal ? Modals[type] : null}
        </div>
    );
};

export default FilterOption;