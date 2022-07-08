import React from "react";
import Card from "../home/card.jsx";
import { filter } from "../../util/filter_util.js";

const TrailsSidebar = ({ trails, options }) => {        
    return (
        <section id="trails-sidebar">
            {filter(trails, options).map((trail, i) => <Card key={i} trail={trail}/>)}
        </section>
    );
};

export default TrailsSidebar;