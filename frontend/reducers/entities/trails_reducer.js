import { RECEIVE_ALL_TRAILS, RECEIVE_TRAIL } from "../../actions/trail_actions.js";

const trailsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_ALL_TRAILS:
            return action.trails;
        case RECEIVE_TRAIL:
            return Object.assign({}, prevState, { [action.trail.id]: action.trail });
        default: 
            return prevState;
    }
};

export default trailsReducer;