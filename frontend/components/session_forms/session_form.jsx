import React from "react";

const SessionForm = props => {
    return (
        <section id="session-form">
            <h3>Session Form Component</h3>
            <form>
                <input type="email" placeholder="Email"/>
                <label>email - error messages</label>

                <input type="password" placeholder="Password"/>
                <label>pw - error messages</label>

                <button type="submit">Sign Up / Log In</button>
            </form>
            <button>Demo User Log In</button>
            {/* nav links to the other session page */}
        </section>
    );
};

export default SessionForm;