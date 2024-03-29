import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createList } from "../../actions/list_actions.js";

const ListForm = ({ setShowForm, createList, userId }) => {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    useEffect(() => {
        const posY = window.pageYOffset;
        const listForm = document.getElementById("list-form");
        listForm.style.top = `${posY}px`;
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    }, []);

    const handleCloseModal = e => {
        e.stopPropagation();
        const body = document.querySelector("body");
        body.style.overflow = "";
        setShowForm(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(name.length > 0) {
            createList({
                name,
                user_id: userId
            });
        }
        handleCloseModal(e);
    };

    const handleName = e => {
        setName(e.target.value);
        if(e.target.value.length > 0) {
            e.target.classList.remove("error");
            setNameError("");
        } else {
            e.target.classList.add("error");
            setNameError("Title required");
        }
    };

    return (
        <section onClick={handleCloseModal} id="list-form">
            <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <section>
                    <img onClick={handleCloseModal} src={images.x_icon} alt="Close"/>
                    <h3>Create A New List</h3>
                    <div>
                        <input onChange={handleName} placeholder={nameError ? nameError : "Title for your new list"}/>
                    </div>
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
