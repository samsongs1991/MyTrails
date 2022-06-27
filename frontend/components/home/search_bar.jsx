import React, { useState } from "react";
import { connect } from "react-redux";
import SearchModal from "./search_modal.jsx";
import { Redirect } from "react-router-dom";

const SearchBar = ({ trails }) => {  
    
    const [modalHidden, setModalHidden] = useState(true);
    const [input, setInput] = useState("");
    
    const handleModal = e => {
        e.stopPropagation();
        setModalHidden(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const list = Object.values(trails);
        const val = input.toLowerCase();
        for(let i = 0; i < list.length; i++) {
            const trail = list[i];
            const name = trail.name.toLowerCase();
            if(name.startsWith(val)) {
                setInput(trail.name);
                // How to redirect to trail show page???
                // Idea
                // - after return statement, make conditional render
                // - if testState if false render search-container
                // - else if true, render a Redirect
                return;
            }
        }
    };
    
    return (
        <section id="search-container">
            <form onSubmit={handleSubmit} id="search-bar">
                <img src="/home_images/search_icon.png" alt="Search Icon"/>
                <input value={input} onChange={e => setInput(e.target.value)} onClick={handleModal} placeholder="Search by trail name"/>
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