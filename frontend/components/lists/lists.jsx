import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ListCard from "./list_card.jsx";

const Lists = ({ match, lists }) => {
    console.log("LISTS COMP props - lists", lists);

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

const mSTP = state => ({
    lists: state.entities.lists
});

export default connect(mSTP)(Lists);
