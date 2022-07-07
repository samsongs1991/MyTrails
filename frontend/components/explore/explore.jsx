import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions.js";
import FilterBar from "./filter_bar.jsx";
import Map from "./map.jsx";

const Explore = ({ trails, fetchAllTrails, history }) => {

    const [options, setOptions] = useState({
        difficulty: { easy: false, moderate: false, hard: false },
        length: { min: 0, max: 20 },
        gain: { min: 0, max: 5000 },
        time: 0,
        category: null,
        rating: null
    });

    console.log("OPTIONS", options);

    useEffect(() => {
        if(Object.keys(trails).length !== 20) {
            fetchAllTrails();
        }
    }, [trails]);

    const handleClick = e => {
        const formModals = document.getElementsByClassName("form-modal");
        const filterArrows = document.getElementsByClassName("filter-arrow");
        for(let i = 0; i < formModals.length; i++) {
            formModals[i].classList.remove("show");
            filterArrows[i].classList.remove("active");
        }
    };
    
    return (
        <section onClick={handleClick} id="explore-page">
            <FilterBar options={options} setOptions={setOptions} history={history}/>
            <section>
                {/* trails */}
                <Map trails={trails}/>
            </section>
        </section>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

const mDTP = dispatch => ({
    fetchAllTrails: () => dispatch(fetchAllTrails())
});

export default connect(mSTP, mDTP)(Explore);