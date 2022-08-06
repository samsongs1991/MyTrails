export const fetchAllTrails = () => $.ajax({
    url: "api/trails",
    method: "GET"
});

export const fetchTrail = trailId => $.ajax({
    url: `api/trails/${trailId}`,
    method: "GET"
});

export const fetchWeather = ({ key, lat, lng }) => $.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${key}`,
    method: "GET"
});

export const extractForecast = list => {
    const result = [];

    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    const weatherSymbols = {
        "01": "sunny",
        "02": "partly_cloudy",
        "03": "cloudy",
        "04": "overcast",
        "09": "showers",
        "10": "rain",
        "11": "storm",
        "13": "snow",
        "50": "fog"
    };

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
        const { dt_txt, weather } = list[i];
        const date = new Date(dt_txt);
        const time = date.toLocaleTimeString();
        const day = days[date.getDay()];
        if(time === "12:00:00 PM") {
            result.push({
                day: day,
                high: minMaxTemps[day].temp_max,
                low: minMaxTemps[day].temp_min,
                weather: weather[0].description,
                icon: weatherSymbols[weather[0].icon.slice(0, 2)]
            });
        }
    }

    return result;
};
