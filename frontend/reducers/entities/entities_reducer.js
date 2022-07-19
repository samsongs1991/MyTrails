import { combineReducers } from "redux";
import usersReducer from "./users_reducer.js";
import trailsReducer from "./trails_reducer.js";
import reviewsReducer from "./reviews_reducer.js";
import listsReducer from "./lists_reducer.js";

const entitiesReducer = combineReducers({
    users: usersReducer,
    trails: trailsReducer,
    reviews: reviewsReducer,
    lists: listsReducer
});

export default entitiesReducer;
