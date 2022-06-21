import { RECEIVE_USER, REMOVE_USER } from "../../actions/session_actions.js";

const sessionReducer = (prevState={id: null}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_USER:
            return { id: action.user.id };
        case REMOVE_USER:
            return { id: null };
        default:
            return prevState;
    }
};

export default sessionReducer;