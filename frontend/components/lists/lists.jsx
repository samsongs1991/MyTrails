import React from "react";
import { Link } from "react-router-dom";
import ListCard from "./list_card.jsx";

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
                    <ListCard/>
                    {/* get lists from state */}
                    {/* iterate through them as array and return array of list_card comps */}
                    {/* display lists as photos with list title overlayed on photo */}
                </section>
            </div>
        </section>
    );
};

export default Lists;
