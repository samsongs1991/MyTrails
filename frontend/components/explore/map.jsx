import React, { useState, useEffect } from "react";

const Map = ({ trails }) => {

    const [mapNode, setMapNode] = useState(null);

    const seattle = { lat: 47.6062, lng: -122.3321 };

    const createMarkerFromTrail = (trail, map) => {
        const marker = new google.maps.Marker({
            position: {
                lat: trail.lat, 
                lng: trail.lng
            }, 
            map: map, 
            title: trail.name, 
        });
        const infoWindow = new google.maps.InfoWindow();
        marker.addListener("click", () => {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            marker.setAnimation(null);
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker)
        })
    };

    useEffect(() => {
        if(mapNode && Object.keys(trails).length === 20) {
            const mapOptions = {
                center: { lat: seattle.lat, lng: seattle.lng }, 
                zoom: 11
            };
            const newMap = new google.maps.Map(mapNode, mapOptions)
            for(let id in trails) {
                createMarkerFromTrail(trails[id], newMap);
            }
        }
    }, [trails]);
    
    return (
        <div 
            id="map-container"
            ref={map => setMapNode(map)}
        >
        </div>
    );
};

export default Map;