import React from "react";
import Card from "../home/card.jsx";

const NearbyTrails = ({ trails, trail }) => {

    const getClosestTrails = () => {
        const arr = Object.values(trails);        
        arr.sort((a, b) => {
            const A = Math.abs(trail.lat - a.lat) + Math.abs(trail.lng - a.lng);
            const B = Math.abs(trail.lat - b.lat) + Math.abs(trail.lng - b.lng);
            return A - B;
        });
        return arr;
    };

    const closestTrails = getClosestTrails();
        
    return (
        <section id="nearby-trails">
            {closestTrails.slice(1, 6).map((trail, i) => <Card key={i} trail={trail}/>)}
        </section>
    );
};

export default NearbyTrails;