import * as Utils from "../util/review_api_util.js";

// Thunk action creators
export const createReview = review => dispatch => {
    Utils.createReview(review)
        .then(review => dispatch(receiveReview(review)));
};

export const fetchAllReviews = idObj => dispatch => {
    Utils.fetchAllReviews(idObj)
        .then(reviews => dispatch(receiveAllReviews(reviews)));
};

// Action creators
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
const receiveReview = review => ({
    type: RECEIVE_REVIEW, 
    review
});

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});