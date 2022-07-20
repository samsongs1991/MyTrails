import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ListCard from "./list_card.jsx";
import ListForm from "./list_form.jsx";
import { fetchLists } from "../../actions/list_actions.js";

const Lists = ({ match, lists, createList, fetchLists }) => {
    console.log("LISTS COMP props - lists", lists);

    const userId = match.params.userId;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(Object.keys(lists).length === 0) {
            fetchLists(userId);
        }
    }, [lists]);


    return (
        <section id="lists-page">
            <div>
                <section>
                    <h2>Lists</h2>
                    <button onClick={() => setShowModal(true)}>New List</button>
                </section>
                <section>
                    <ListCard/>
                    {/* get lists from state */}
                    {/* iterate through them as array and return array of list_card comps */}
                    {/* display lists as photos with list title overlayed on photo */}
                </section>
            </div>
            {showModal ? <ListForm setShowModal={setShowModal}/> : null}
        </section>
    );
};

const mSTP = state => ({
    lists: state.entities.lists
});

const mDTP = dispatch => ({
    fetchLists: userId => dispatch(fetchLists(userId))
});

export default connect(mSTP, mDTP)(Lists);
