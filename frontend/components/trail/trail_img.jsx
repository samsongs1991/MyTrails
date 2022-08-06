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
                        <img src={images.star_filled} alt="star"/>
                        {trail.avg_rating}
                    </p>
                </div>
                {userId ? <img onClick={() => setShowForm(true)} id="flag" src={trailInList ? images.flag_filled : images.flag_outline} alt="Add to a list"/> : null}
            </div>
        </section>
    );
};

export default TrailImg;
