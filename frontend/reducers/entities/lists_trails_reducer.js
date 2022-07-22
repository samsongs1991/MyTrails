import { RECEIVE_LISTS_TRAIL } from "../../actions/lists_trail_actions.js";
import { RECEIVE_LISTS } from "../../actions/list_actions.js";
import { REMOVE_USER } from "../../actions/session_actions.js";

const listsTrailsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_LISTS:
            return action.lists.lists_trails;
        case RECEIVE_LISTS_TRAIL:
            return Object.assign({}, prevState, { [action.listsTrail.id]:action.listsTrail });
        case REMOVE_USER:
            return {};
        default:
            return prevState;
    }
};

export default listsTrailsReducer;
