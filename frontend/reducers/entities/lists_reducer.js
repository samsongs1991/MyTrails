import { RECEIVE_LISTS, RECEIVE_LIST } from "../../actions/list_actions.js";

const listsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_LISTS:
            return action.lists;
        case RECEIVE_LIST:
            return Object.assign({}, prevState, { [action.list.id]: action.list});
        default:
            return prevState;
    }
};

export default listsReducer;
