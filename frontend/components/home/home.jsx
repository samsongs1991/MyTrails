import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./search_bar.jsx";
import TrailCards from "./trail_cards.jsx";
import { fetchAllTrails } from "../../actions/trail_actions.js";
import { fetchLists } from "../../actions/list_actions.js";

const Home = ({ user, trails, lists, fetchAllTrails, fetchLists, history }) => {
    window.scrollTo({ top: 0 });

    if(Object.keys(trails).length !== 20) {
        fetchAllTrails();
    }

    if(user && Object.keys(lists).length === 0) {
        fetchLists(user.id);
    }

    return (
        <section id="home-page">
            <section id="home-image">
                <div>{user ? `Ready to do this, ${user.fname}?` : "Find your next trail"}</div>
                <SearchBar history={history}/>
            </section>
            <TrailCards/>
        </section>
    );
};

const mSTP = state => ({
    user: state.entities.users[state.session.id],
    trails: state.entities.trails,
    lists: state.entities.lists
});

const mDTP = dispatch => ({
    fetchAllTrails: () => dispatch(fetchAllTrails()),
    fetchLists: (userId) => dispatch(fetchLists(userId))
});

export default connect(mSTP, mDTP)(Home);
