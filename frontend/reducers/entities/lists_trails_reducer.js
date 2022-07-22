import { RECEIVE_LISTS_TRAIL, REMOVE_LISTS_TRAIL } from "../../actions/lists_trail_actions.js";
import { RECEIVE_LISTS } from "../../actions/list_actions.js";
import { REMOVE_USER } from "../../actions/session_actions.js";

const listsTrailsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_LISTS:
            return action.lists.lists_trails;
        case RECEIVE_LISTS_TRAIL:
            return Object.assign({}, prevState, action.listsTrail);
        case REMOVE_LISTS_TRAIL:
            const nextState = Object.assign({}, prevState);
            delete nextState[action.listsTrailId];
            return nextState;
        case REMOVE_USER:
            return {};
        default:
            return prevState;
    }
};

export default listsTrailsReducer;
