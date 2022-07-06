import React, { useState, useEffect } from "react";
import * as Modals from "./filter_modals.jsx";

const FilterOption = ({ type, input, setInput }) => {

    const [showModal, setShowModal] = useState(false);

    const hideModal = e => {
        const btn = document.getElementById(type);
        if(e.target !== btn) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        const explorePage = document.getElementById("explore-page");
        explorePage.addEventListener("click", hideModal);
    }, []);
    
    return (
        <div>
            <button id={type} onClick={() => setShowModal(!showModal)}>{type}</button>
            {showModal ? Modals[type] : null}
        </div>
    );
};

export default FilterOption;