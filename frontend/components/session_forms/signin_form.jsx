import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signIn } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mSTP = state => ({
    errors: state.errors.session, 
    formType: "signin", 
    navLink: <div>Don't have an account? <Link to="/signup" >Sign up for free</Link></div>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signIn(user)),
    loginDemoUser: () => dispatch(signIn({ email: "demo@gmail.com", password: "123456" }))
});

export default connect(mSTP, mDTP)(SessionForm);