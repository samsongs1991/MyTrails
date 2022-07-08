import React from "react";
import Card from "../home/card.jsx";

const TrailsSidebar = ({ trails }) => {        
    return (
        <section id="trails-sidebar">
            {Object.values(trails).map((trail, i) => <Card key={i} trail={trail}/>)}
        </section>
    );
};

export default TrailsSidebar;