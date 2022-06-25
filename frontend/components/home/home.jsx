import React from "react";
import { connect } from "react-redux";
import SearchBar from "./search_bar.jsx";
import Trails from "./trails.jsx";

const Home = ({ user }) => {
    return (
        <section id="home-page">
            HOME COMPONENT
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

export default connect(mSTP)(Home);