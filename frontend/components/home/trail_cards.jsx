import React from "react";
import { connect } from "react-redux";
import Card from "./card.jsx";

const TrailCards = ({ trails }) => {

    const getTopTrails = () => {
        const arr = Object.values(trails);
        arr.sort((a, b) => {
            return b.avg_rating - a.avg_rating;
        });
        return arr;
    }

    const topTrails = getTopTrails();
    
    return (
        <section id="trail-cards-container">
            <section id="trail-cards">
                <h3>Favorite trails near <span>Seattle</span></h3>
                <section className="cards">
                    {topTrails.slice(0,4).map((trail, i) => <Card key={i} trail={trail}/>)}
                </section>
                <section className="cards">
                    {topTrails.slice(4,8).map((trail, i) => <Card key={i} trail={trail}/>)}
                </section>
            </section>
        </section>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

export default connect(mSTP)(TrailCards);