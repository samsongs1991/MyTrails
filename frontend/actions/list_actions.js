import * as Utils from "../util/list_api_util.js";

// Thunk action creators
export const fetchLists = userId => dispatch => {
    Utils.fetchLists(userId)
        .then(
            lists => dispatch(receiveLists(lists))
        );
};

export const createList = list => dispatch => {
    Utils.createList(list)
        .then(
            list => dispatch(receiveList(list))
        );
};

export const updateList = list => dispatch => {
    Utils.updateList(list)
        .then(
            list => dispatch(receiveList(list))
        );
};

export const deleteList = listId => dispatch => {
    Utils.deleteList(listId)
        .then(
            listId => dispatch(removeList(listId))
        );
};

// Action creators
export const RECEIVE_LISTS = "RECEIVE_LISTS";
const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists
});

export const RECEIVE_LIST = "RECEIVE_LIST";
const receiveList = list => ({
    type: RECEIVE_LIST,
    list
});

export const REMOVE_LIST = "REMOVE_LIST";
const removeList = listId => ({
    type: REMOVE_LIST,
    listId
});
