import React from "react";
import { Link } from "react-router-dom";

const Card = ({ trail }) => {
    return (
        <section>
            <Link to={`/trails/${trail.id}`}>
                {trail.name}
            </Link>
        </section>
    );
};

export default Card;