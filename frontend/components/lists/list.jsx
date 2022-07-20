import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateList, deleteList } from "../../actions/list_actions.js";

// NOTES
// copy over what i need to from edit_profile comp
// working to have list comp modal have the following
// - edit title
// - delete list
// - edit photo
// - remove trail or visit the trail page
    // - when on trail page, work on adding trail to a list upon star click = another modal form

const List = ({ selectedList, setSelectedList, updateList, deleteList }) => {
    const list = selectedList;
    const [name, setName] = useState(list.name);

    useEffect(() => {
        const posY = window.pageYOffset;
        const modal = document.getElementById(`list-${list.id}`);
        modal.style.top = `${posY}px`;
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    }, []);

    const handleCloseModal = e => {
        e.stopPropagation();
        const body = document.querySelector("body");
        body.style.overflow = "";
        setSelectedList();
    }

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch action to ...
        // - update list
            // - name
            // - photo
            // - trails
        updateList({
            id: list.id,
            name
        });
        handleCloseModal(e);
    };

    const handleDelete = e => {
        handleCloseModal(e);
    };

    const handleName = e => {
        setName(e.target.value);
        if(e.target.value.length === 0) {
            e.target.classList.add("error");
        } else {
            e.target.classList.remove("error");
        }
    };



    return (
        <section onClick={handleCloseModal} id={`list-${list.id}`} className="list-modal">
            <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <section>
                    <div>
                        <img onClick={handleCloseModal} src="/trail_images/x_icon.png" alt="Close"/>
                        <img onClick={handleDelete} src="/list_images/trash_icon.png" alt="Delete List"/>
                    </div>
                    <input onChange={handleName} value={name} placeholder="Title required"/>
                </section>
                <section>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </section>
            </form>
        </section>
    );
};

const mSTP = state => ({
    // userId: state.session.id
});

const mDTP = dispatch => ({
    // createList: list => dispatch(createList(list))
    updateList: list => dispatch(updateList(list)),
    deleteList: listId => dispatch(deleteList(listId))
});

export default connect(mSTP, mDTP)(List);
