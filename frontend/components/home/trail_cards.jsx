import React from "react";
import { connect } from "react-redux";
import Card from "./card.jsx";

const TrailCards = ({ trails }) => {
    return (
        <section id="trail-cards-container">
            <section id="trail-cards">
                <h3>Favorite trails near <span>Seattle</span></h3>
                <section id="cards">
                    {/* {Object.values(trails).map((trail, i) => <Card key={i} trail={trail}/>)} */}
                    {Object.values(trails).slice(0,1).map((trail, i) => <Card key={i} trail={trail}/>)}
                </section>
            </section>
        </section>
    );
};

const mSTP = state => ({
    trails: state.entities.trails
});

export default connect(mSTP)(TrailCards);