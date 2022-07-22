import * as Utils from "../util/lists_trail_api_util.js";

// Thunk action creators
export const addTrailToList = listsTrail => dispatch => {
    Utils.createListsTrail(listsTrail)
        .then(
            listsTrail => dispatch(receiveListsTrail(listsTrail)),
            err => console.log("Error from DB in addTrailToList function of lists_trail_actions.js", err)
        );
};

export const removeTrailFromList = listsTrailId => dispatch => {
    Utils.deleteListsTrail(listsTrailId)
        .then(
            listsTrailId => dispatch(removeListsTrail(listsTrailId)),
            err => console.log("Error from DB in removeTrailFromList function of lists_trail_actions.js", err)
        );
};

// Action creators
export const RECEIVE_LISTS_TRAIL = "RECEIVE_LISTS_TRAIL";
const receiveListsTrail = listsTrail => ({
    type: RECEIVE_LISTS_TRAIL,
    listsTrail
});

export const REMOVE_LISTS_TRAIL = "REMOVE_LISTS_TRAIL";
const removeListsTrail = listsTrailId => ({
    type: REMOVE_LISTS_TRAIL,
    listsTrailId
});
