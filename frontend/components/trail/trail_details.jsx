import React from "react";
import Details from "./details.jsx";
import WeatherWidget from "./weather_widget.jsx";
import Map from "./map.jsx";
import Reviews from "./reviews.jsx";

const TrailDetails = ({ trail }) => {
    return (
        <section id="trail-details">
            <Details trail={trail}/>
            <WeatherWidget trail={trail}/>
            <Map trail={trail}/>
            <Reviews trail={trail}/>
        </section>
    );
};

export default TrailDetails;