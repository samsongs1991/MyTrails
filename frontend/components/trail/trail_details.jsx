import React from "react";
import Details from "./details.jsx";
import WeatherWidget from "./weather_widget.jsx";

const TrailDetails = ({ trail }) => {
    return (
        <section id="trail-details">
            <Details trail={trail}/>

            <section id="map">
                MINI MAP
            </section>
            
            <WeatherWidget trail={trail}/>

            <section>
                REVIEWS
            </section>
            
        </section>
    );
};

export default TrailDetails;