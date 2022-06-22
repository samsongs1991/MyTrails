import React from "react";
import Header from "./header/header.jsx";

import SessionForm from "./session_forms/session_form.jsx";

const App = () => (
    <>
        <Header/>

        {/* start conditional render comps based on route */}
        {/* session form comp - sign up / sign in pages */}
        <SessionForm/>
    </>
);

export default App;