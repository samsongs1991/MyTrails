import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { removeSessionErrors, signIn } from "../../actions/session_actions";

const mSTP = state => ({
    errors: state.errors.session, 
    formType: "signin"
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signIn(user)),
    loginDemoUser: () => dispatch(signIn({ email: "demo@gmail.com", password: "123456" })), 
    clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);