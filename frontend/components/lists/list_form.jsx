import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createList } from "../../actions/list_actions.js";

const ListForm = ({ setShowModal, createList, userId }) => {

    const [input, setInput] = useState("");

    useEffect(() => {
        const posY = window.pageYOffset;
        const reviewForm = document.getElementById("list-form");
        reviewForm.style.top = `${posY}px`;
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    }, []);

    const handleCloseModal = e => {
        e.stopPropagation();
        const body = document.querySelector("body");
        body.style.overflow = "";
        setShowModal(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        createList({
            name: input,
            user_id: userId
        });
        handleCloseModal(e);
    };

    return (
        <section onClick={handleCloseModal} id="list-form">
            <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <section>
                    <img onClick={handleCloseModal} src="/trail_images/x_icon.png" alt="Close"/>
                    <h3>Create A New List</h3>
                    <input onChange={e => setInput(e.target.value)} placeholder="Title for your new list"/>
                </section>
                <section>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </section>
            </form>
        </section>
    );
};

const mSTP = state => ({
    userId: state.session.id
});

const mDTP = dispatch => ({
    createList: list => dispatch(createList(list))
});

export default connect(mSTP, mDTP)(ListForm);
