import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileModal from "./profile_modal.jsx";
import { removeSessionErrors } from "../../actions/session_actions.js";

const NavBar = ({ users, id, clearErrors }) => {
    const user = users[id];
    const [modalHidden, setModalHidden] = useState(true);
        
    const profileLinks = () => (
        <div id="profile-links-container">
            <div>Welcome {user.fname}</div>
            <img 
                src="/header_images/menu_bar.png" alt="Menu bar icon"
                onMouseOver={() => setModalHidden(false)} 
                onMouseLeave={() => setModalHidden(true)} 
            />
            {modalHidden ? null : <ProfileModal setModalHidden={setModalHidden}/>}
        </div>
    );

    const sessionLinks = (
        <div id="session-links-container">
            <Link to="/signup" onClick={clearErrors}>Sign Up</Link>
            <Link to="/signin" onClick={clearErrors}>Log In</Link>
        </div>
    );
    
    return (
        <nav>
            <Link to="/explore">Explore</Link>
            <Link to="/"><img src="/header_images/logo.png" alt="MyTrails Logo"/></Link>
            {user ? profileLinks() : sessionLinks}
        </nav>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
});

const mDTP = dispatch => ({
    clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(mSTP, mDTP)(NavBar);