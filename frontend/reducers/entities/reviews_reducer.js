import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from "../../actions/review_actions.js";

const reviewsReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, prevState, { [action.review.id]: action.review });
        default: 
            return prevState;
    }
};

export default reviewsReducer;