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