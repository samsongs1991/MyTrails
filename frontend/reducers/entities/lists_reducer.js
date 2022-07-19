import { RECEIVE_LISTS } from "../../actions/list_actions.js";

const listsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_LISTS:
            return action.lists;
        default:
            return prevState;
    }
};

export default listsReducer;
