import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions.js";

const Trail = ({ trails, fetchTrail, match }) => {

    const trailId = match.params.trailId;
    const trail = trails[trailId];
    
    useEffect(() => {
        if(!trail) {
            fetchTrail(trailId);
        }
    }, []);

    const locationTree = () => {
        if(trail) {
            return (
                <article>
                    <div>location tree</div>
                    <div>search bar</div>
                </article>
            );
        }
    };

    const trailImg = () => {
        return (
            <article>
                <div>
                    <p>trail name</p>
                    <p>difficulty + star rating</p>
                </div>
                <div>
                    <img src="" alt="Add to list icon"/>
                </div>
            </article>
        );
    };
    
    return (
        <section id="trail-page">
            {locationTree()}
            {trailImg()}
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