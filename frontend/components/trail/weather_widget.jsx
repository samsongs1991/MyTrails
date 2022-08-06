import React from "react";
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions.js";

const WeatherWidget = ({ trail, fetchTrail }) => {
    return trail.forecast ? (
        <section id="weather-widget">
            <section>
                <h2>Weather</h2>
            </section>
            <section>
                {trail.forecast ? trail.forecast.map(({ day, high, low, weather, icon }, i) =>
                    <article key={i}>
                        <h6>{day}</h6>
                        <img src={images[icon]} alt={`${weather} icon`}/>
                        <p>{`${high}° / ${low}° F`}</p>
                    </article>) : null}
            </section>
        </section>
    ) : fetchTrail(trail.id);
};

const mDTP = dispatch => ({
    fetchTrail: trailId => dispatch(fetchTrail(trailId))
});

export default connect(null, mDTP)(WeatherWidget);
