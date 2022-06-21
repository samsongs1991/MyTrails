import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/session_actions.js";

const NavBar = props => {
    const { users, id, signOut } = props;

    const currentUser = users[id];

    const sessionLinks = (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Log In</Link>
        </div>
    );
        
    const profileIcon = (
        <div>

        </div>
    );


    
    return (
        <nav>
            <Link to="/trails">Explore</Link>
            <Link to="/"><img src="logo.png" alt="MyTrails Logo"/></Link>
            {currentUser ? profileIcon : sessionLinks}
        </nav>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
});

const mDTP = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(mSTP, mDTP)(NavBar);