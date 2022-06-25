import React from "react";
import { connect } from "react-redux";
import SearchBar from "./search_bar.jsx";
import Trails from "./trails.jsx";

const Home = ({ user }) => {
    return (
        <section id="home-page">
            HOME COMPONENT
            {/* img */}
            <section id="home-image">
                {user ? <div>Ready to do this, {user.fname}?</div> : null}
            </section>
            {/* search bar */}
            <SearchBar/>
            {/* trail cards */}
            <Trails/>
        </section>
    );
};

const mSTP = state => ({
    user: state.entities.users[state.session.id]
});

export default connect(mSTP)(Home);