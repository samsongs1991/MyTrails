import React, { useState, useEffect } from "react";
import { weatherKey } from "../../../secrets.js";

const WeatherWidget = ({ trail }) => {
    
    const [forecast, setForecast] = useState(null);
    
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${trail.lat}&lon=${trail.lng}&appid=${weatherKey}`;
    
    const extractForecast = ({ list }) => {
        const result = [];

        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday"
        ];

        const extractMinMaxTemps = () => {
            const minMaxTemps = {};

            const convertTemp = k => {
                return Math.ceil(((k - 273.15) * (9/5)) + 32);
            };

            for(let i = 0; i < list.length; i++) {
                const { dt_txt, main: { temp_max, temp_min } } = list[i];
                const day = days[new Date(dt_txt).getDay()];
                const max = convertTemp(temp_max);
                const min = convertTemp(temp_min);
                if(minMaxTemps[day]) {
                    if(max > minMaxTemps[day].temp_max) minMaxTemps[day].temp_max = max;
                    if(min < minMaxTemps[day].temp_min) minMaxTemps[day].temp_min = min;
                } else {
                    minMaxTemps[day] = { temp_max: max, temp_min: min };
                }
            }

            return minMaxTemps;
        };

        const minMaxTemps = extractMinMaxTemps();

        for(let i = 0; i < list.length; i++) {
            const { dt_txt, main, weather } = list[i];
            const date = new Date(dt_txt);
            const time = date.toLocaleTimeString();
            const day = days[date.getDay()];
            if(time === "12:00:00 PM") {
                result.push({
                    day: day, 
                    high: minMaxTemps[day].temp_max, 
                    low: minMaxTemps[day].temp_min, 
                    weather: weather[0].description, 
                    icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
                });
            }
        }

        return result;
    };
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setForecast(extractForecast(data)));
    }, [])

    return (
        <section id="weather-widget">
            <h2>Weather</h2>
            <article>
                {console.log("forecast", forecast)}
                {/* Work on gathering images for each forecast weather description */}
            </article>
        </section>
    );
};

export default WeatherWidget;