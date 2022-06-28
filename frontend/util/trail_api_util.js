export const fetchAllTrails = () => $.ajax({
    url: "api/trails", 
    method: "GET"
});

export const fetchTrail = trailId => $.ajax({
    url: `api/trails/${trailId}`, 
    method: "GET"
});