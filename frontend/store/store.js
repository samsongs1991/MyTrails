import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import reducer from "../reducers/root_reducer.js";

const createConfiguredStore = () => {
    let middleware;
    if (process.env.NODE_ENV !== "production") {
        middleware = getDefaultMiddleware => getDefaultMiddleware().concat(logger);
    } else {
        middleware = getDefaultMiddleware => getDefaultMiddleware();
    }
    let preloadedState;
    if(window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        };
    }
    const store = configureStore({reducer, middleware, preloadedState});
    delete window.currentUser;

    return store;
}

export default createConfiguredStore;
