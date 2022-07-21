import React, { useState } from "react";
import { Link } from "react-router-dom";

const SessionForm = ({ errors, formType, processForm, loginDemoUser, clearErrors }) => {
    window.scrollTo({ top: 0 });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(e.target.id === "demo-login") {
            loginDemoUser();
        } else {
            processForm({ email, password });
        }
    };

    const navLink = () => {
        if(formType === "signup") {
            return <div>Already have an account? <Link to="/signin" onClick={clearErrors}>Log In</Link></div>
        } else {
            return <div>Don't have an account? <Link to="/signup" onClick={clearErrors}>Sign up for free</Link></div>
        }
    };

    return (
        <section id="session-page" className={formType === "signup" ? "signup-page" : "signin-page"}>
            <article id="session-form">
                <h3>{formType === "signup" ? "Create your free account" : "Log in and let's get going"}</h3>
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email"/>
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password"/>
                    <div>{errors.map((err, i) => <li key={i}>{err}</li>)}</div>
                    <button onClick={handleSubmit}>{formType === "signup" ? "Sign Up" : "Log In"}</button>
                    <button onClick={handleSubmit} id="demo-login">Demo User Log In</button>
                </form>
                {navLink()}
            </article>
        </section>
    );
};

export default SessionForm;
