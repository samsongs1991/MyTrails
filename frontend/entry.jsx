import React from 'react';
import { createRoot } from 'react-dom/client';

document.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.getElementById("root"));
    root.render(<>React is working! - Testing</>);
});

// = = = = = = = = = = = =
// = = = = TESTING = = = =
// = = = = = = = = = = = =

import store from "./store/store.js";

window.store = store;