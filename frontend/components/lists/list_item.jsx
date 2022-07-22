import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ListItem = ({ trail, list, listsTrails, listsTrailsToDelete, setListsTrailsToDelete }) => {

    const handleDelete = e => {
        for(let id in listsTrails) {
            const listsTrail = listsTrails[id];
            if(listsTrail.list_id === list.id && listsTrail.trail_id === trail.id) {
                const arr = listsTrailsToDelete.slice();
                arr.push(id);
                setListsTrailsToDelete(arr);
                e.target.parentElement.classList.add("hide");
                return;
            }
        }
    };

    const handleLink = e => {
        const body = document.querySelector("body");
        body.style.overflow = "";
    };

    return (
        <li>
            <Link onClick={handleLink} to={`/trails/${trail.id}`}>{trail.name}</Link>
            <img onClick={handleDelete} src="/list_images/x_icon.png" alt="Remove trail from list"/>
        </li>
    );
};

const mSTP = state => ({
    listsTrails: state.entities.listsTrails
});

export default connect(mSTP)(ListItem);
