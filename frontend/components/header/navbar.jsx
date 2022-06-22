import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileModal from "./profile_modal.jsx";

const NavBar = ({ users, id, signUp, signIn }) => {
    const user = users[id];
    const [modalHidden, setModalHidden] = useState(true);
        
    const profileIcon = () => (
        <div>
            <div>Welcome {user.fname}</div>
            <img 
                src="menu_bar.png" alt="Menu bar icon"
                onMouseOver={() => setModalHidden(false)} 
                onMouseLeave={() => setModalHidden(true)} 
            />
            {modalHidden ? null : <ProfileModal setModalHidden={setModalHidden}/>}
        </div>
    );

    // for testing the sign up / sign in buttons
    const sessionLinks = (
        <div id="session-links-container">
            <Link to="/signup" id="signup" onClick={() => signUp({ email: "demo@gmail.com", password: "123456" })}>Sign Up</Link>
            <Link to="/signin" id="signin" onClick={() => signIn({ email: "demo@gmail.com", password: "123456" })}>Log In</Link>
        </div>
    );
    
    return (
        <nav>
            <Link to="/trails">Explore</Link>
            <Link to="/"><img id="logo" src="logo.png" alt="MyTrails Logo"/></Link>
            {user ? profileIcon() : sessionLinks}
        </nav>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
});

// for testing the sign up and sign in buttons
import { signIn, signUp } from "../../actions/session_actions.js";
const mDTP = dispatch => ({
    signIn: user => dispatch(signIn(user)), 
    signUp: user => dispatch(signUp(user))
});

export default connect(mSTP, mDTP)(NavBar);