import * as Utils from "../util/user_api_util.js";

// Thunk action creators
export const updateUser = user => dispatch => {
    Utils.updateUser(user)
        .then(
            user => dispatch(receiveUser(user)),
            err => dispatch(receiveUserErrors(err.responseJSON))
        );
};

// Action creators
export const RECEIVE_USER = "RECEIVE_USER";
const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});
