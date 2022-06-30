import React from "react";
import Details from "./details.jsx";

const TrailDetails = ({ trail }) => {
    return (
        <section id="trail-details">
            <Details trail={trail}/>
            <section>
                MINI MAP
            </section>
            <section>
                WEATHER WIDGET
            </section>
            <section>
                REVIEWS
            </section>
        </section>
    );
};

export default TrailDetails;