import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions.js";
import LocationTree from "./location_tree.jsx";
import TrailImg from "./trail_img.jsx";

const Trail = ({ trails, fetchAllTrails, match }) => {

    const trailId = match.params.trailId;
    const trail = trails[trailId];
    
    useEffect(() => {
        if(!trail) {
            fetchAllTrails();
        }
    }, []);
    
    return (
        <section id="trail-page">
            <div>
                <LocationTree trail={trail}/>
                <TrailImg/>
            </div>
        </section>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

const mDTP = dispatch => ({
    fetchAllTrails: () => dispatch(fetchAllTrails())
});

export default connect(mSTP, mDTP)(Trail);