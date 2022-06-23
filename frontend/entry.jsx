import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from "./components/root.jsx";
import createConfiguredStore from "./store/store.js";

document.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.getElementById("root"));
    root.render(<Root store={createConfiguredStore()}/>);
});