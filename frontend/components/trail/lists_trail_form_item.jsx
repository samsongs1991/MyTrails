import React from "react";
import { connect } from "react-redux";
import { addTrailToList } from "../../actions/lists_trail_actions.js";

const ListsTrailFormItem = ({ list, trail, addTrailToList }) => {

    const handleAdd = e => {
        addTrailToList({ trail_id: trail.id, list_id: list.id });
    };

    return (
        <li>
            <img onClick={handleAdd} src="/trail_images/star_outline.png" alt="Create new list"/>
            <p>{list.name}</p>
        </li>
    );
};

const mDTP = dispatch => ({
    addTrailToList: listsTrail => dispatch(addTrailToList(listsTrail))
});

export default connect(null, mDTP)(ListsTrailFormItem);
