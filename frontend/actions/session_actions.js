import * as Utils from "../util/session_api_util.js";

// Thunk action creators
export const signIn = user => dispatch => {
    Utils.signIn(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => dispatch(receiveSessionErrors(err.responseJSON)));
};

export const signOut = () => dispatch => {
    Utils.signOut()
        .then(() => dispatch(signOutUser()))
        .catch(err => dispatch(receiveSessionErrors(err.responseJSON)));
};

export const signUp = user => dispatch => {
    Utils.signUp(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => dispatch(receiveSessionErrors(err.responseJSON)));
};

// Action creators
export const RECEIVE_USER = "RECEIVE_USER";
const receiveUser = user => ({
    type: RECEIVE_USER, 
    user
});

export const REMOVE_USER = "REMOVE_USER";
const signOutUser = () => ({
    type: REMOVE_USER
});

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS, 
    errors
});