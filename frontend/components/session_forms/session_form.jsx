import React, { useState } from "react";

const SessionForm = ({ errors, formType, navLink, processForm, loginDemoUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const formMessage = () => {
        if(formType === "signup") {
            return "Create your free acount"
        } else {
            return "Log in and let's get going"
        }
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        processForm({ email, password });
    }
    
    return (
        <section id="session-form">
            <h3>{formMessage()}</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email"/>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password"/>
                <div>{errors.map((err, i) => <li key={i}>{err}</li>)}</div>
                <button type="submit">{formType === "signup" ? "Sign Up" : "Log In"}</button>
            </form>
            <button onClick={loginDemoUser}>Demo User Log In</button>
            {navLink}
        </section>
    );
};

export default SessionForm;