import * as Utils from "../util/trail_api_util.js";

// Thunk action creators
export const fetchAllTrails = () => dispatch => {
    Utils.fetchAllTrails()
        .then(trails => dispatch(receiveAllTrails(trails)));
};

// Action creators
export const RECEIVE_ALL_TRAILS = "RECEIVE_ALL_TRAILS";
const receiveAllTrails = trails => ({
    type: RECEIVE_ALL_TRAILS, 
    trails
});