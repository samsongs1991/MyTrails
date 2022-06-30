import React from "react";

const TrailImg = ({ trail }) => {
    return trail ? (
        <article id="trail-img">
            <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/shutterstock_1200681070.jpg" alt="Image of trail"/>
            <div>
                <div>
                    <p>{trail.name}</p>
                    <p><span className={trail.difficulty}>{trail.difficulty}</span> + star rating</p>
                </div>
                <img id="star" src="/trail_images/star_outline.png" alt="Add to list icon"/>
            </div>
        </article>
    ) : null;
};

export default TrailImg;