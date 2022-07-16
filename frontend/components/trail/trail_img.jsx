import React from "react";

const TrailImg = ({ trail }) => {
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
                <img id="star" src="/trail_images/star_outline.png" alt="Add to list icon"/>
            </div>
        </section>
    );
};

export default TrailImg;
