import { RECEIVE_ALL_TRAILS } from "../../actions/trail_actions.js";

const usersReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_ALL_TRAILS:
            return action.trails;
        default: 
            return prevState;
    }
};

export default usersReducer;