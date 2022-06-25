import React, { useEffect } from "react";
import SearchItem from "./search_item.jsx";

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
        <menu id="search-modal">
            {Object.values(trails).map((trail, i) => <SearchItem key={i} trail={trail}/>)}
        </menu>
    );
};

export default SearchModal;