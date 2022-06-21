import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <Link to="/trails">Explore</Link>
        <Link to="/"><img src="logo.png" alt="MyTrails Logo"/></Link>
        {/* sign in / sign up buttons */}
    </nav>
);

export default NavBar;