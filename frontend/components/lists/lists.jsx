import React from "react";
import { Link } from "react-router-dom";

const Lists = ({ match }) => {
    const userId = match.params.userId;

    return (
        <section id="lists-page">
            <div>
                <section>
                    <h2>Lists</h2>
                    <Link to={`/users/${userId}/lists/edit`}>Edit Lists</Link>
                </section>
                <section>

                </section>
            </div>
        </section>
    );
};

export default Lists;
