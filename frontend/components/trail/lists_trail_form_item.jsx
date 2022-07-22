import React, { useState } from "react";
import { connect } from "react-redux";
import { addTrailToList, removeTrailFromList } from "../../actions/lists_trail_actions.js";

const ListsTrailFormItem = ({ list, trail, listsTrails, addTrailToList, removeTrailFromList }) => {

    const findListsTrail = () => {
        for(let id in listsTrails) {
            const listTrail = listsTrails[id];
            if(listTrail.list_id === list.id && listTrail.trail_id === trail.id) {
                return listTrail;
            }
        }
        return null;
    };

    const [added, setAdded] = useState(Boolean(findListsTrail()));

    const handleAdd = e => {
        addTrailToList({ trail_id: trail.id, list_id: list.id });
        setAdded(true);
    };

    const handleRemove = e => {
        removeTrailFromList(findListsTrail().id);
        setAdded(false);
    };

    const starOutline = <img onClick={handleAdd} src="/trail_images/star_outline.png" alt="Add trail to list"/>;
    const starFilled = <img onClick={handleRemove} src="/trail_images/star_filled.png" alt="Remove trail from list"/>;

    return (
        <li>
            {added ? starFilled : starOutline}
            <p>{list.name}</p>
        </li>
    );
};

const mSTP = state => ({
    listsTrails: state.entities.listsTrails
});

const mDTP = dispatch => ({
    addTrailToList: listsTrail => dispatch(addTrailToList(listsTrail)),
    removeTrailFromList: listsTrailId => dispatch(removeTrailFromList(listsTrailId))
});

export default connect(mSTP, mDTP)(ListsTrailFormItem);
