import * as Utils from "../util/trail_api_util.js";

// Thunk action creators
export const fetchAllTrails = () => dispatch => {
    Utils.fetchAllTrails()
        .then(trails => dispatch(receiveAllTrails(trails)));
};

export const fetchTrail = trailId => dispatch => {
    Utils.fetchTrail(trailId)
        .then(trail => {
            Utils.fetchWeather(trail)
                .then(({ list }) => {
                    trail.forecast = Utils.extractForecast(list);
                    dispatch(receiveTrail(trail));
                });
        });
};

// Action creators
export const RECEIVE_ALL_TRAILS = "RECEIVE_ALL_TRAILS";
const receiveAllTrails = trails => ({
    type: RECEIVE_ALL_TRAILS, 
    trails
});

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";
const receiveTrail = trail => ({
    type: RECEIVE_TRAIL, 
    trail
});