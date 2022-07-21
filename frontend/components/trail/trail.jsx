import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions.js";
import LocationTree from "./location_tree.jsx";
import TrailImg from "./trail_img.jsx";
import TrailDetails from "./trail_details.jsx";
import NearbyTrails from "./nearby_trails.jsx";

const Trail = ({ trails, fetchAllTrails, match, history }) => {
    window.scrollTo({ top: 0 });

    const trailId = match.params.trailId;
    const trail = trails[trailId];

    useEffect(() => {
        if(!trail) {
            fetchAllTrails();
        }
    }, []);

    return trail ? (
        <section id="trail-page">
            <div>
                <LocationTree trail={trail} history={history}/>
                <TrailImg trail={trail}/>
                <section>
                    <TrailDetails trail={trail}/>
                    <NearbyTrails trails={trails} trail={trail}/>
                </section>
            </div>
        </section>
    ) : null;
};

const mSTP = state => ({
    trails: state.entities.trails
});

const mDTP = dispatch => ({
    fetchAllTrails: () => dispatch(fetchAllTrails())
});

export default connect(mSTP, mDTP)(Trail);
