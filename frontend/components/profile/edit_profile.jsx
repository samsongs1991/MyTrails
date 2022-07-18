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

    const [name, setName] = useState(`${user.fname} ${user.lname}`);
    const [place, setPlace] = useState(`${user.city}, ${user.state}`);
    const [aboutMe, setAboutMe] = useState(user.about_me);

    const handleSave = e => {
        console.log("handle save");
    };

    const handleName = e => {
        const validName = name => {
            return name.split(" ").length === 2;
        };
        setName(e.target.value);
        if(validName(e.target.value)) {
            e.target.classList.remove("error");
        } else {
            e.target.classList.add("error");
        }
    };

    const handlePlace = e => {
        const validPlace = place => {
            const states = [
                "Alabama", "AL",
                "Alaska", "AK",
                "Arizona", "AZ",
                "Arkansas", "AR",
                "California", "CA",
                "Colorado", "CO",
                "Connecticut", "CT",
                "Delaware", "DE",
                "Florida", "FL",
                "Georgia", "GA",
                "Hawaii", "HI",
                "Idaho", "ID",
                "Illinois", "IL",
                "Indiana", "IN",
                "Iowa", "IA",
                "Kansas", "KS",
                "Kentucky", "KY",
                "Louisiana", "LA",
                "Maine", "ME",
                "Maryland", "MD",
                "Massachusetts", "MA",
                "Michigan", "MI",
                "Minnesota", "MN",
                "Mississippi", "MS",
                "Missouri", "MO",
                "Montana", "MT",
                "Nebraska", "NE",
                "Nevada", "NV",
                "New Hampshire", "NH",
                "New Jersey", "NJ",
                "New Mexico", "NM",
                "New York", "NY",
                "North Carolina", "NC",
                "North Dakota", "ND",
                "Ohio", "OH",
                "Oklahoma", "OK",
                "Oregon", "OR",
                "Pennsylvania", "PA",
                "Rhode Island", "RI",
                "South Carolina", "SC",
                "South Dakota", "SD",
                "Tennessee", "TN",
                "Texas", "TX",
                "Utah", "UT",
                "Vermont", "VT",
                "Virginia", "VA",
                "Washington", "WA",
                "West Virginia", "WV",
                "Wisconsin", "WI",
                "Wyoming", "WY"
            ];
            const arr = place.split(", ");
            return arr.length === 2 && states.includes(arr[1]);
        };
        setPlace(e.target.value);
        if(validPlace(e.target.value)) {
            e.target.classList.remove("error");
        } else {
            e.target.classList.add("error");
        }
    };

    return (
        <section id="profile-page">
            <div>
                <section>
                    <h2>Profile</h2>
                    <Link onClick={handleSave} to={`/users/${user.id}/profile`}>Save Changes</Link>
                </section>
                <section>
                    <div>
                        <img src={user.profile_img} alt="profile picture"/>
                        <p>Member Since</p>
                        <p>{formatDate(user.created_at)}</p>
                    </div>
                    <div>
                        <input onChange={handleName} value={name}/>
                        <input onChange={handlePlace} value={place}/>
                        <p>{user.email}</p>
                        <textarea onChange={e => setAboutMe(e.target.value)} value={aboutMe}/>
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
