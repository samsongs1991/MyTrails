import { RECEIVE_SESSION_ERRORS, RECEIVE_USER, REMOVE_USER } from "../../actions/session_actions.js";

const sessionErrorsReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return [];
        case REMOVE_USER:
            return [];
        default:
            return prevState;
    }
};

export default sessionErrorsReducer;