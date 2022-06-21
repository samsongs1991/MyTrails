import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/session_actions.js";

const ProfileModal = ({ users, id, signOut, setModalHidden }) => {
    const user = users[id];

    return (
        <menu 
            onMouseOver={() => setModalHidden(false)}
            onMouseLeave={() => setModalHidden(true)}
        >
            <Link to={`/users/${user.id}`}>Dashboard</Link>
            <Link to={`/users/${user.id}/settings`}>Settings</Link>
            <Link to="/" onClick={signOut}>Logout</Link>
        </menu>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
});

const mDTP = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(mSTP, mDTP)(ProfileModal);