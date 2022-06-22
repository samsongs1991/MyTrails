import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form.jsx";
import { signUp, signIn } from "../../actions/session_actions.js";
import { Link } from "react-router-dom";

const mSTP = state => ({
    errors: state.errors.session,
    formType: "signup", 
    navLink: <div>Already have an account? <Link to="/signin">Log In</Link></div>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signUp(user)),
    loginDemoUser: () => dispatch(signIn({ email: "demo@gmail.com", password: "123456" }))
});

export default connect(mSTP, mDTP)(SessionForm);