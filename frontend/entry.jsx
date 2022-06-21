import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from "./components/root.jsx";

document.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.getElementById("root"));
    root.render(<Root/>);
});