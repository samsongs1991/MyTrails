import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form.jsx";
import { signUp, signIn, removeSessionErrors } from "../../actions/session_actions.js";

const mSTP = state => ({
    errors: state.errors.session,
    formType: "signup"
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signUp(user)),
    loginDemoUser: () => dispatch(signIn({ email: "demo@gmail.com", password: "123456" })), 
    clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);