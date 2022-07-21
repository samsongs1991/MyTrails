import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ListsTrailFormItem from "./lists_trail_form_item.jsx";
import { createList } from "../../actions/list_actions.js";

const ListsTrailForm = ({ setShowForm, trail, userId, lists, createList }) => {

    const [name, setName] = useState("");

    useEffect(() => {
        const posY = window.pageYOffset;
        const listForm = document.getElementById("lists-trail-form");
        listForm.style.top = `${posY}px`;
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    }, []);

    const handleCloseModal = e => {
        e.preventDefault();
        e.stopPropagation();
        const body = document.querySelector("body");
        body.style.overflow = "";
        setShowForm(false);
    }

    const handleNewList = e => {
        if(name.length > 0) {
            createList({ name, user_id: userId});
            setName("");
        }
    };

    return (
        <section onClick={handleCloseModal} id="lists-trail-form">
            <form onClick={e => e.stopPropagation()} onSubmit={handleCloseModal}>
                <section>
                    <img onClick={handleCloseModal} src="/trail_images/x_icon.png" alt="Close"/>
                    <h3>Add {trail.name}</h3>
                    <ul>
                        {Object.values(lists).map((list, i) => <ListsTrailFormItem key={i} list={list} trail={trail}/>)}
                        <li>
                            <img onClick={handleNewList} src="/trail_images/plus_icon.png" alt="Create new list"/>
                            <input onChange={e => setName(e.target.value)} value={name} placeholder="Create a new list"/>
                        </li>
                    </ul>
                </section>
                <section>
                    <div>
                        <button type="submit">Done</button>
                    </div>
                </section>
            </form>
        </section>
    );
};

const mSTP = state => ({
    userId: state.session.id,
    lists: state.entities.lists
});

const mDTP = dispatch => ({
    createList: list => dispatch(createList(list))
});

export default connect(mSTP, mDTP)(ListsTrailForm);
