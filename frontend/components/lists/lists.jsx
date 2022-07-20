import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ListCard from "./list_card.jsx";
import ListForm from "./list_form.jsx";
import List from "./list.jsx";
import { fetchLists } from "../../actions/list_actions.js";

const Lists = ({ match, lists, fetchLists }) => {
    const userId = match.params.userId;
    const [showForm, setShowForm] = useState(false);
    const [selectedList, setSelectedList] = useState();

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
                    <button onClick={() => setShowForm(true)}>New List</button>
                </section>
                <section>
                    {Object.values(lists).map((list, i) => <ListCard key={i} list={list} setSelectedList={setSelectedList}/>)}
                </section>
            </div>
            {showForm ? <ListForm setShowForm={setShowForm}/> : null}
            {selectedList ? <List selectedList={selectedList} setSelectedList={setSelectedList}/> : null}
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
