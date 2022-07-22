import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllTrails } from "../../actions/trail_actions.js";
import { fetchLists } from "../../actions/list_actions.js";
import LocationTree from "./location_tree.jsx";
import TrailImg from "./trail_img.jsx";
import TrailDetails from "./trail_details.jsx";
import NearbyTrails from "./nearby_trails.jsx";
import ListsTrailForm from "./lists_trail_form.jsx";

const Trail = ({ trails, userId, listsTrails, lists, fetchAllTrails, fetchLists, match, history }) => {
    window.scrollTo({ top: 0 });

    const trailId = match.params.trailId;
    const trail = trails[trailId];
    const trailInList = () => {
        for(let id in listsTrails) {
            const listsTrail = listsTrails[id];
            if(listsTrail.trail_id === trail.id) {
                return true;
            }
        }
        return false;
    };
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if(!trail) {
            fetchAllTrails();
        }
        if(userId && Object.keys(lists).length === 0) {
            fetchLists(userId);
        }
    }, []);

    return trail ? (
        <section id="trail-page">
            <div>
                <LocationTree trail={trail} history={history}/>
                <TrailImg trailInList={trailInList()} setShowForm={setShowForm} trail={trail} userId={userId}/>
                <section>
                    <TrailDetails trail={trail}/>
                    <NearbyTrails trails={trails} trail={trail}/>
                </section>
            </div>
            {showForm ? <ListsTrailForm setShowForm={setShowForm} trail={trail}/> : null}
        </section>
    ) : null;
};

const mSTP = state => ({
    trails: state.entities.trails,
    userId: state.session.id,
    listsTrails: state.entities.listsTrails,
    lists: state.entities.lists
});

const mDTP = dispatch => ({
    fetchAllTrails: () => dispatch(fetchAllTrails()),
    fetchLists: userId => dispatch(fetchLists(userId))
});

export default connect(mSTP, mDTP)(Trail);
