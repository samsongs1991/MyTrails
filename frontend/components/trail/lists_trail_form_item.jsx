import React from "react";
import { connect } from "react-redux";

const ListsTrailFormItem = ({ list, trail }) => {
    return (
        <li>
            {/* list name + button to add trail to the list */}
            {list.name}
        </li>
    );
};

const mDTP = dispatch => ({

});

export default connect(null, mDTP)(ListsTrailFormItem);
