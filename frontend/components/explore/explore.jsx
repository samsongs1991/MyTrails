import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Explore = ({ trails }) => {

    const [map, setMap] = useState(null);
    const [mapNode, setMapNode] = useState(null);

    const seattle = { lat: 47.6062, lng: -122.3321 };
    
    useEffect(() => {
        const mapOptions = {
            center: { lat: seattle.lat, lng: seattle.lng }, 
            zoom: 13
        };
        if(mapNode) {
            const newMap = new google.maps.Map(mapNode, mapOptions)
            // new google.maps.Marker({
            //     position: {
            //         lat: trail.lat, 
            //         lng: trail.lng
            //     }, 
            //     map: newMap, 
            //     title: trail.name, 
            // });
            // do above code for each trail
            setMap(newMap);
        }
    }, [mapNode]);
    
    return (
        <section id="explore-page">
            EXPLORE COMPONENT
            <div 
                id="map-container"
                ref={map => setMapNode(map)}
            >
            </div>
        </section>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

export default connect(mSTP)(Explore);