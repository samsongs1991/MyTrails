import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ListForm from "./list_form.jsx";
import ListCard from "./list_card.jsx";
import { fetchLists } from "../../actions/list_actions.js";

const Lists = ({ match, lists, fetchLists }) => {
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
                    {Object.values(lists).map((list, i) => <ListCard key={i} list={list}/>)}
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
