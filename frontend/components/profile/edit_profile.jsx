import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../actions/user_actions.js";

const EditProfile = ({ users, id, updateUser }) => {
    window.scrollTo({ top: 0 });

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
    const [errors, setErrors] = useState({ name: undefined, place: undefined, photo: undefined });
    const [photo, setPhoto] = useState();
    const [photoUrl, setPhotoUrl] = useState(user.profile_img);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        errors.name || errors.place || errors.photo ? setStatus(false) : setStatus(true);
    }, [errors]);

    const handleSave = e => {
        const fname = name.split(" ")[0];
        const lname = name.split(" ")[1];
        const city = place.split(", ")[0];
        const state = place.split(", ")[1];

        const formData = new FormData();
        formData.append("id", user.id);
        formData.append("user[id]", user.id);
        formData.append("user[email]", user.email);
        formData.append("user[profile_img]", user.profile_img);
        formData.append("user[created_at]", user.created_at);
        formData.append("user[fname]", fname);
        formData.append("user[lname]", lname);
        formData.append("user[city]", city);
        formData.append("user[state]", state);
        formData.append("user[about_me]", aboutMe);
        formData.append("user[errors]", JSON.stringify(errors));
        formData.append("user[photo]", photo);

        updateUser(formData);
    };

    const handlePhoto = e => {
        const validPhoto = photo => {
            const mimes = [
                "image/apng",
                "image/avif",
                "image/gif",
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/webp"
            ]
            const mime = photo.type;
            return mimes.includes(mime);
        };
        const fileReader = new FileReader();
        const file = e.target.files[0];
        if(file) {
            fileReader.readAsDataURL(file);
            if(validPhoto(file)) {
                fileReader.onloadend = () => {
                    setPhoto(file);
                    setPhotoUrl(fileReader.result);
                }
                e.target.parentElement.classList.remove("error");
                setErrors(Object.assign({}, errors, { photo: undefined }));
                // setStatus(true);
            } else {
                e.target.parentElement.classList.add("error");
                setErrors(Object.assign({}, errors, { photo: "Invalid image" }));
                // setStatus(false);
            }
        }
    };

    const handleName = e => {
        const validName = name => {
            return name.split(" ").length === 2;
        };
        setName(e.target.value);
        if(validName(e.target.value)) {
            e.target.classList.remove("error");
            setErrors(Object.assign({}, errors, { name: undefined }));
            // setStatus(true);
        } else {
            e.target.classList.add("error");
            setErrors(Object.assign({}, errors, { name: "Invalid name" }));
            // setStatus(false);
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
            setErrors(Object.assign({}, errors, { place: undefined }));
            // setStatus(true);
        } else {
            e.target.classList.add("error");
            setErrors(Object.assign({}, errors, { place: "Invalid location" }));
            // setStatus(false);
        }
    };

    return (
        <section id="profile-page">
            <div>
                <section>
                    <h2>Profile</h2>
                    <Link onClick={handleSave} to={{ pathname: `/users/${user.id}/profile`, state: status }}>Save Changes</Link>
                </section>
                <section>
                    <div>
                        <img src={photoUrl} alt="profile picture"/>
                        <p>Member Since</p>
                        <p>{formatDate(user.created_at)}</p>
                        <label htmlFor="file-upload">
                            Change Photo
                            <input onChange={handlePhoto} id="file-upload" type="file"/>
                        </label>
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

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mSTP, mDTP)(EditProfile);
