import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import Home from "./home/home.jsx";
import SignUpForm from "./session_forms/signup_form.jsx";
import SignInForm from "./session_forms/signin_form.jsx";
import Trail from "./trail/trail.jsx";
import Explore from "./explore/explore.jsx";
import Profile from "./profile/profile.jsx";
import Lists from "./lists/lists.jsx";

const App = () => (
    <>
        <Header/>
        <Route path="/" exact component={Home}/>
        <AuthRoute path="/signup" component={SignUpForm}/>
        <AuthRoute path="/signin" component={SignInForm}/>
        <Route path="/trails/:trailId" component={Trail}/>
        <Route path="/explore" component={Explore}/>
        <ProtectedRoute path="/users/:userId/profile" component={Profile}/>
        <ProtectedRoute path="/users/:userId/lists" component={Lists}/>
        <Footer/>
    </>
);

export default App;
