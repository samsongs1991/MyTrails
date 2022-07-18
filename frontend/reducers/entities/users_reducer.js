import { RECEIVE_USER, REMOVE_USER } from "../../actions/session_actions.js";

const usersReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_USER:
            return { [action.user.id]: action.user };
        case REMOVE_USER:
            return {};
        default:
            return prevState;
    }
};

export default usersReducer;
