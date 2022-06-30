import React from "react";

const Details = ({ trail }) => (
    <section id="details">
        <div>
            <p>Length</p>
            <p>{trail.length} mi</p>
        </div>
        <div>
            <p>Elevation Gain</p>
            <p>{trail.gain} ft</p>
        </div>
        <div>
            <p>Route Type</p>
            <p>{trail.category}</p>
        </div>
    </section>
);

export default Details;