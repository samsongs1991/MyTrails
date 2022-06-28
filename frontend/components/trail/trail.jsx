import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions.js";
import LocationTree from "./location_tree.jsx";
import TrailImg from "./trail_img.jsx";

const Trail = ({ trails, fetchTrail, match }) => {

    const trailId = match.params.trailId;
    const trail = trails[trailId];
    
    useEffect(() => {
        if(!trail) {
            fetchTrail(trailId);
        }
    }, []);
    
    return (
        <section id="trail-page">
            <LocationTree/>
            <TrailImg/>
        </section>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

const mDTP = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId))
});

export default connect(mSTP, mDTP)(Trail);