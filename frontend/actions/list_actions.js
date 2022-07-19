import * as Utils from "../util/list_api_util.js";

// Thunk action creators
export const fetchLists = userId => dispatch => {
    Utils.fetchLists(userId)
        .then(
            lists => console.log("LIST ACTIONS - lists", lists),
            err => console.log("LIST ACTIONS - err", err)
        );
};

// Action creators
export const RECEIVE_LISTS = "RECEIVE_LISTS";
// const receiveLists = lists => ({
//     type: RECEIVE_LISTS,
//     lists
// });
