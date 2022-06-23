import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileModal from "./profile_modal.jsx";

const NavBar = ({ users, id }) => {
    const user = users[id];
    const [modalHidden, setModalHidden] = useState(true);
        
    const profileLinks = () => (
        <div id="profile-links-container">
            <div>Welcome {user.fname}</div>
            <img 
                src="menu_bar.png" alt="Menu bar icon"
                onMouseOver={() => setModalHidden(false)} 
                onMouseLeave={() => setModalHidden(true)} 
            />
            {modalHidden ? null : <ProfileModal setModalHidden={setModalHidden}/>}
        </div>
    );

    const sessionLinks = (
        <div id="session-links-container">
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Log In</Link>
        </div>
    );
    
    return (
        <nav>
            <Link to="/trails">Explore</Link>
            <Link to="/"><img src="logo.png" alt="MyTrails Logo"/></Link>
            {user ? profileLinks() : sessionLinks}
        </nav>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
});

export default connect(mSTP)(NavBar);