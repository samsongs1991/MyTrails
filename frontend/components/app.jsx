import React from "react";
import Header from "./header/header.jsx";
import { Route } from "react-router-dom";

import SignUpForm from "./session_forms/signup_form.jsx";
import SignInForm from "./session_forms/signin_form.jsx";

const App = () => (
    <>
        <Header/>

        {/* finished testing signup and signin form comps */}
        {/* work on auth routes / css for form comps */}
        <Route path="/signup" component={SignUpForm}/>
        <Route path="/signin" component={SignInForm}/>
    </>
);

export default App;