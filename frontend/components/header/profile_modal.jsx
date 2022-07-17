import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/session_actions.js";

const ProfileModal = ({ users, id, signOut, setModalHidden }) => {
    const user = users[id];

    const handleLogout = () => {
        setModalHidden(true);
        signOut();
    };

    return (
        <menu
            onMouseOver={() => setModalHidden(false)}
            onMouseLeave={() => setModalHidden(true)}
        >
            <Link to={`/users/${user.id}/profile`}>Profile</Link>
            <Link to={`/users/${user.id}/lists`}>Lists</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>
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
