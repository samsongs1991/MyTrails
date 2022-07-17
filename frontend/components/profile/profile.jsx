import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Profile = ({ users, id }) => {
    const user = users[id];

    return (
        <section id="profile-page">
            <section>
                <h2>Profile</h2>
                <Link to={`/users/${user.id}/edit`}>Edit Profile</Link>
            </section>
            <section>
                <div>
                    <img src={user.profile_img} alt="profile picture"/>
                    <p>Member Since</p>
                    <p>{user.created_at}</p>
                </div>
                <div>
                    <h3>{user.fname} {user.lname}</h3>
                    <p>{user.city}, {user.state}</p>
                    <p>{user.email}</p>
                    <p>{user.about_me}</p>
                </div>
            </section>
        </section>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
});

export default connect(mSTP)(Profile);
