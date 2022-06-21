import { RECEIVE_SESSION_ERRORS } from "../../actions/session_actions.js";

const sessionErrorsReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return prevState;
    }
};

export default sessionErrorsReducer;