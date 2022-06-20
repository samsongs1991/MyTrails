import { combineReducers } from "redux";
import entitiesReducer from "./entities/entities_reducer.js";
import sessionReducer from "./session/session_reducer.js";
import errorsReducer from "./errors/errors_reducer.js";

const rootReducer = combineReducers({
    entities: entitiesReducer, 
    session: sessionReducer, 
    errors: errorsReducer,
});

export default rootReducer;