import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeTrailFromList } from "../../actions/lists_trail_actions";

const ListItem = ({ trail, list, listsTrails, removeTrailFromList }) => {

    const handleDelete = e => {
        for(let id in listsTrails) {
            const listsTrail = listsTrails[id];
            if(listsTrail.list_id === list.id && listsTrail.trail_id === trail.id) {
                removeTrailFromList(id);
                return;
            }
        }
    };

    return (
        <li>
            <Link to={`/trails/${trail.id}`}>{trail.name}</Link>
            <img onClick={handleDelete} src="/trail_images/x_icon.png" alt="Remove trail from list"/>
        </li>
    );
};

const mSTP = state => ({
    listsTrails: state.entities.listsTrails
});

const mDTP = dispatch => ({
    removeTrailFromList: listsTrailId => dispatch(removeTrailFromList(listsTrailId))
});

export default connect(mSTP, mDTP)(ListItem);
