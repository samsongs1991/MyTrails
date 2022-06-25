export const fetchAllTrails = () => $.ajax({
    url: "api/trails", 
    method: "GET", 
});