import React from "react";
import Details from "./details.jsx";
import WeatherWidget from "./weather_widget.jsx";

const TrailDetails = ({ trail }) => {
    return (
        <section id="trail-details">
            <Details trail={trail}/>
            <section>
                MINI MAP
            </section>
            <section>
                <WeatherWidget trail={trail}/>
            </section>
            <section>
                REVIEWS
            </section>
        </section>
    );
};

export default TrailDetails;