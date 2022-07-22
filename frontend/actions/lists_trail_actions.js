import * as Utils from "../util/lists_trail_api_util.js";

// Thunk action creators
export const addTrailToList = listsTrail => dispatch => {
    Utils.createListsTrail(listsTrail)
        .then(
            listsTrail => dispatch(receiveListsTrail(listsTrail))
        );
};

export const removeTrailFromList = listsTrailId => dispatch => {
    Utils.deleteListsTrail(listsTrailId)
        .then(
            listsTrailId => dispatch(removeListsTrail(listsTrailId))
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
