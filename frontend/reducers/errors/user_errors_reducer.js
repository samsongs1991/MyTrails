import { RECEIVE_USER_ERRORS, RECEIVE_USER, CLEAR_USER_ERRORS } from "../../actions/user_actions.js";

const userErrorsReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return [];
        case CLEAR_USER_ERRORS:
            return [];
        default:
            return prevState;
    }
};

export default userErrorsReducer;
