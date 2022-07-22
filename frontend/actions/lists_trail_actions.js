import * as Utils from "../util/lists_trail_api_util.js";

// Thunk action creators
export const addTrailToList = listsTrail => dispatch => {
    Utils.createListsTrail(listsTrail)
        .then(
            listsTrail => dispatch(receiveListsTrail(listsTrail)),
            err => console.log("Error from DB in addTrailToList function of lists_trail_actions.js", err)
        );
};

// Action creators
export const RECEIVE_LISTS_TRAIL = "RECEIVE_LISTS_TRAIL";
const receiveListsTrail = listsTrail => ({
    type: RECEIVE_LISTS_TRAIL,
    listsTrail
});
