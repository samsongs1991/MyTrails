import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { weatherKey } from "../../../secrets.js";
import { fetchTrail } from "../../actions/trail_actions.js";

const WeatherWidget = ({ trail, fetchTrail }) => {
    
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        fetchTrail(trail.id);
    }, [])

    return (
        <section id="weather-widget">
            <section>
                <h2>Weather</h2>
            </section>
            <section>
                {forecast ? forecast.map(({ day, high, low, weather, icon }, i) => 
                    <article key={i}>
                        <h6>{day}</h6>
                        <img src={icon} alt={`${weather} icon`}/>
                        <p>{`${high}° / ${low}° F`}</p>
                    </article>) : null}
            </section>
        </section>
    );
};

const mDTP = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId))
});

export default connect(null, mDTP)(WeatherWidget);