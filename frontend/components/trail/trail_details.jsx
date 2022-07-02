import React from "react";
import Details from "./details.jsx";
import Map from "./map.jsx";
import WeatherWidget from "./weather_widget.jsx";
import Reviews from "./reviews.jsx";

const TrailDetails = ({ trail }) => {
    return (
        <section id="trail-details">
            <Details trail={trail}/>
            <Map trail={trail}/>
            <WeatherWidget trail={trail}/>
            <Reviews trail={trail}/>
        </section>
    );
};

export default TrailDetails;