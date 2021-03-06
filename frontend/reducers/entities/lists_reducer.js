import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from "../../actions/list_actions.js";
import { REMOVE_USER } from "../../actions/session_actions.js";

const listsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_LISTS:
            return action.lists.lists;
        case RECEIVE_LIST:
            return Object.assign({}, prevState, { [action.list.id]: action.list});
        case REMOVE_LIST:
            const nextState = Object.assign({}, prevState);
            delete nextState[action.listId];
            return nextState;
        case REMOVE_USER:
            return {};
        default:
            return prevState;
    }
};

export default listsReducer;
