import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ trail }) => (
    <Link to={`/trails/${trail.id}`} onClick={e => e.stopPropagation()}>
        <img src="/home_images/marker_icon.png" alt="Location Icon"/>
        <article>
            <div>{trail.name}</div>
            <div>{trail.location}, {trail.city}, {trail.state}</div>
        </article>
    </Link>
);

export default SearchItem;