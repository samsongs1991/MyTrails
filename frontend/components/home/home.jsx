import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./search_bar.jsx";
import Trails from "./trails.jsx";
import { fetchAllTrails } from "../../actions/trail_actions.js";

const Home = ({ user, fetchAllTrails }) => {
    
    useEffect(() => {
        fetchAllTrails();
    }, []);
    
    return (
        <section id="home-page">
            <section id="home-image">
                <div>{user ? `Ready to do this, ${user.fname}?` : "Find your next trail"}</div>
                <SearchBar/>
            </section>
            <Trails/>
        </section>
    );
};

const mSTP = state => ({
    user: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchAllTrails: () => dispatch(fetchAllTrails())
});

export default connect(mSTP, mDTP)(Home);