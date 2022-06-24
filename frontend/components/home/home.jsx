import React from "react";
import { connect } from "react-redux";

const Home = ({ user }) => {
    return (
        <section id="home-page">
            HOME COMPONENT
            {/* img */}
            <section id="home-image">
                {user ? <div>Ready to do this, {user.fname}?</div> : null}
            </section>
            {/* search bar */}
            {/* <SearchBar/> */}
            {/* trail cards */}
            {/* <Trails/> */}
        </section>
    );
};

const mSTP = state => ({
    user: state.entities.users[state.session.id]
});

export default connect(mSTP)(Home);