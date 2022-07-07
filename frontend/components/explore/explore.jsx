import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions.js";
import FilterBar from "./filter_bar.jsx";
import Map from "./map.jsx";

const Explore = ({ trails, fetchAllTrails, history }) => {

    const [options, setOptions] = useState({
        difficulty: { easy: false, moderate: false, hard: false },
        length: 20,
        gain: 0,
        time: 0,
        category: null,
        rating: null
    });

    useEffect(() => {
        if(Object.keys(trails).length !== 20) {
            fetchAllTrails();
        }
    }, [trails]);
    
    return (
        <section id="explore-page">
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