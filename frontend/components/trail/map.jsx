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
            setMap(new google.maps.Map(mapNode, mapOptions));
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