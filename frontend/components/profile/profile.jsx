import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Profile = ({ users, id, errors }) => {
    const user = users[id];
    const formatDate = date => {
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ]
        date = new Date(date);
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    useEffect(() => {
        if(errors.length > 0) {
            const ul = document.querySelector("ul");
            ul.classList.add("show");
            setTimeout(() => {
                ul.classList.remove("show");
            }, 4000);
        }
    }, [errors]);

    return (
        <section id="profile-page">
            <div>
                <section>
                    <h2>Profile</h2>
                    <Link to={`/users/${user.id}/edit`}>Edit Profile</Link>
                    <ul>
                        <p>Update failed</p>
                        {errors.map((item, i) => <li key={i}> - {item}</li>)}
                    </ul>
                </section>
                <section>
                    <div>
                        <img src={user.profile_img} alt="profile picture"/>
                        <p>Member Since</p>
                        <p>{formatDate(user.created_at)}</p>
                    </div>
                    <div>
                        <h3>{user.fname} {user.lname}</h3>
                        <p>{user.city}, {user.state}</p>
                        <p>{user.email}</p>
                        <p>{user.about_me}</p>
                    </div>
                </section>
            </div>
        </section>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id,
    errors: state.errors.user
});

export default connect(mSTP)(Profile);
