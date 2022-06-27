import React, { useState } from "react";
import { connect } from "react-redux";
import SearchModal from "./search_modal.jsx";

const SearchBar = ({ trails }) => {  
    
    const [modalHidden, setModalHidden] = useState(true);
    const [input, setInput] = useState("");
    
    const handleModal = e => {
        e.stopPropagation();
        setModalHidden(false);
    };

    const handleSubmit = e => {
        e.preventDefault();

    };
    
    return (
        <section id="search-container">
            <form onSubmit={handleSubmit} id="search-bar">
                <img src="/home_images/search_icon.png" alt="Search Icon"/>
                <input onChange={e => setInput(e.target.value)} onClick={handleModal} placeholder="Search by trail name"/>
                <button type="submit"></button>
            </form>

            {modalHidden ? null : <SearchModal input={input} trails={Object.values(trails)} setModalHidden={setModalHidden}/>}
        </section>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

export default connect(mSTP)(SearchBar);