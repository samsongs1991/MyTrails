import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const EditProfile = ({ users, id }) => {
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

    const [fname, setFname] = useState(user.fname);
    const [lname, setLname] = useState(user.lname);
    const [city, setCity] = useState(user.city);
    const [state, setState] = useState(user.state);
    const [email, setEmail] = useState(user.email);
    const [aboutMe, setAboutMe] = useState(user.about_me);

    return (
        <section id="profile-page">
            <div>
                <section>
                    <h2>Profile</h2>
                    <Link to={`/users/${user.id}/profile`}>Save Changes</Link>
                </section>
                <section>
                    <div>
                        <img src={user.profile_img} alt="profile picture"/>
                        <p>Member Since</p>
                        <p>{formatDate(user.created_at)}</p>
                    </div>
                    <div>
                        <input value={`${fname} ${lname}`}/>
                        <input value={`${city}, ${state}`}/>
                        <input value={email}/>
                        <textarea value={aboutMe}/>
                    </div>
                </section>
            </div>
        </section>
    );
};

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
});

export default connect(mSTP)(EditProfile);
