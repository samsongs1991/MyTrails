import React, { useEffect } from "react";

const SearchModal = ({ trails, setModalHidden }) => {

    useEffect(() => {
        const showModal = () => {
            setModalHidden(true);
        }

        document.addEventListener("click", showModal);
        
        return () => {
            document.removeEventListener("click", showModal);
        }
    }, []);
    
    return (
        <article id="search-modal">
            SearchModalComponent
        </article>
    );
};

export default SearchModal;