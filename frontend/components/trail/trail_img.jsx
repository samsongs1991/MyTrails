import React from "react";

const TrailImg = ({ trailInList, setShowForm, trail, userId }) => {
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
                {userId ? <img onClick={() => setShowForm(true)} id="flag" src={`/trail_images/flag_${trailInList ? "filled" : "outline"}.png`} alt="Add to a list"/> : null}
            </div>
        </section>
    );
};

export default TrailImg;
