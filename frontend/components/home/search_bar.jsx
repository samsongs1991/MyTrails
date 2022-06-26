import React, { useState } from "react";
import { connect } from "react-redux";
import SearchModal from "./search_modal.jsx";

const SearchBar = ({ trails }) => {  
    
    const [modalHidden, setModalHidden] = useState(true);
    
    const handleModal = e => {
        e.stopPropagation();
        setModalHidden(false);
    };
    
    return (
        <>
            <form id="search-bar">
                <img src="/home_images/search_icon.png" alt="Search Icon"/>

                <input onClick={handleModal} placeholder="Search by city, park, or trail name"/>
                
                <img src="/home_images/arrow.png" alt="Submit"/>
            </form>

            {modalHidden ? null : <SearchModal trails={trails} setModalHidden={setModalHidden}/>}
        </>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

export default connect(mSTP)(SearchBar);