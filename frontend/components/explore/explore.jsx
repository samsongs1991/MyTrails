import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions.js";
import Map from "./map.jsx";

const Explore = ({ trails, fetchAllTrails }) => {

    useEffect(() => {
        if(Object.keys(trails).length !== 20) {
            fetchAllTrails();
        }
    }, [trails]);
    
    return (
        <section id="explore-page">

            <section>
                {/* filter bar */}
            </section>

            <section>
                {/* trails */}
                {/* map */}
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