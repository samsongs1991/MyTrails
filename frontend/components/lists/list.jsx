import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// NOTES
// copy over what i need to from edit_profile comp
// working to have list comp modal have the following
// - edit photo
// - edit title
// - remove trail or visit the trail page
    // - when on trail page, work on adding trail to a list upon star click = another modal form
// - delete list

const List = ({ selectedList, setSelectedList }) => {
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
        handleCloseModal(e);
    };

    return (
        <section onClick={handleCloseModal} id={`list-${list.id}`} className="list-modal">
            <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <section>
                    <img onClick={handleCloseModal} src="/trail_images/x_icon.png" alt="Close"/>
                    <h3>{list.name}</h3>
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
});

export default connect(mSTP, mDTP)(List);
