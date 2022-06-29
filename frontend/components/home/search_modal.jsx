import React, { useEffect } from "react";
import SearchItem from "./search_item.jsx";

const SearchModal = ({ trails, input, setInput, setModalHidden }) => {

    useEffect(() => {
        const showModal = () => {
            setModalHidden(true);
        }
        
        document.addEventListener("click", showModal);
        
        return () => {
            document.removeEventListener("click", showModal);
        }
    }, []);

    const filterTrails = () => {
        const arr = [];
        const regex = new RegExp(input.toLowerCase());
        for(let i = 0; i < trails.length; i++) {
            let trail = trails[i];
            if(trail.name.toLowerCase().match(regex)) {
                arr.push(<SearchItem key={trail.id} trail={trail} setInput={setInput} setModalHidden={setModalHidden}/>);
            }
        }
        return arr;
    };
    
    return (
        <menu id="search-modal">
            {filterTrails()}
        </menu>
    );
};

export default SearchModal;