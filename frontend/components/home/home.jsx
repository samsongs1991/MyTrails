import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./search_bar.jsx";
import TrailCards from "./trail_cards.jsx";
import { fetchAllTrails } from "../../actions/trail_actions.js";

const Home = ({ user, trails, fetchAllTrails, history }) => {
    
    if(Object.keys(trails).length !== 20) {
        fetchAllTrails();
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
    trails: state.entities.trails
});

const mDTP = dispatch => ({
    fetchAllTrails: () => dispatch(fetchAllTrails())
});

export default connect(mSTP, mDTP)(Home);