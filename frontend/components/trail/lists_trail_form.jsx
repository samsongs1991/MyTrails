import React from "react";
import { connect } from "react-redux";

// const ListsTrailForm = ({ trail, userId, lists, createList, addTrailToList }) => {
const ListsTrailForm = props => {
        console.log("ListsTrailForm props: ", props);

    return (
        <section id="lists-trail-form">

        </section>
    );
};

const mSTP = state => ({
    userId: state.entities.session.id,
    lists: state.entities.lists
});

const mDTP = dispatch => ({
    // createList
    // addTrailToList
});

export default connect(mSTP, mDTP)(ListsTrailForm);
