import React from "react";
import { connect } from "redux";

const Home = props => {
    return (
        <section id="home-page">
            HOME COMPONENT
        </section>
    );
};

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Home);