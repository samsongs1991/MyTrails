import React, { useState } from "react";
import { connect } from "react-redux";
import { addTrailToList } from "../../actions/lists_trail_actions.js";

const ListsTrailFormItem = ({ list, trail, listsTrails, addTrailToList }) => {

    const trailInList = () => {
        for(let id in listsTrails) {
            const listTrail = listsTrails[id];
            if(listTrail.list_id === list.id && listTrail.trail_id === trail.id) {
                return true;
            }
        }
        return false;
    };

    const [added, setAdded] = useState(trailInList());

    const handleAdd = e => {
        addTrailToList({ trail_id: trail.id, list_id: list.id });
        setAdded(true);
    };

    const handleRemove = e => {
        // remove trail from list front/backend
        // removeTrailFromList(listsTrailId)
        console.log("HANDLE REMOVE");
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
    addTrailToList: listsTrail => dispatch(addTrailToList(listsTrail))
});

export default connect(mSTP, mDTP)(ListsTrailFormItem);
