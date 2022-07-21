import React from "react";

const TrailImg = ({ setShowForm, trail }) => {
    return (
        <section id="trail-img">
            <img src={trail.trail_img} alt="Image of trail"/>
            <div>
                <div>
                    <p>{trail.name}</p>
                    <p>
                        <span className={trail.difficulty}>{trail.difficulty}</span>
                        <img src="/trail_images/star_filled.png" alt="star"/>
                        {trail.avg_rating}
                    </p>
                </div>
                <img onClick={() => setShowForm(true)} id="star" src="/trail_images/star_outline.png" alt="Add to a list"/>
            </div>
        </section>
    );
};

export default TrailImg;
