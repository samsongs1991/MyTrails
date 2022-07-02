import React, { useState, useEffect } from "react";

const Map = ({ trail }) => {

    const [map, setMap] = useState(null);
    const [mapNode, setMapNode] = useState(null);

    useEffect(() => {
        const mapOptions = {
            center: { lat: trail.lat, lng: trail.lng }, 
            zoom: 13
        };
        if(mapNode) {
            const newMap = new google.maps.Map(mapNode, mapOptions)
            new google.maps.Marker({
                position: {
                    lat: trail.lat, 
                    lng: trail.lng
                }, 
                map: newMap, 
                title: trail.name, 
            });
            setMap(newMap);
        }
    }, [mapNode]);
    
    return (
        <section 
            id="map-container"
            ref={map => setMapNode(map)}
        >
        </section>
    );
};

export default Map;