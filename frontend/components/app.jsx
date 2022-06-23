import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Header from "./header/header.jsx";
import Home from "./home/home.jsx";
import SignUpForm from "./session_forms/signup_form.jsx";
import SignInForm from "./session_forms/signin_form.jsx";

const App = () => (
    <>
        <Header/>
        <Route path="/" exact component={Home}/>
        <AuthRoute path="/signup" component={SignUpForm}/>
        <AuthRoute path="/signin" component={SignInForm}/>
    </>
);

export default App;