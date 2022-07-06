import React from "react";

const TrailImg = ({ trail }) => {
    return (
        <section id="trail-img">
            <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/shutterstock_1200681070.jpg" alt="Image of trail"/>
            <div>
                <div>
                    <p>{trail.name}</p>
                    <p>
                        <span className={trail.difficulty}>{trail.difficulty}</span>
                        <img src="/trail_images/star_filled.png" alt="star"/>    
                        <div>{trail.avg_rating}</div>
                    </p>
                </div>
                <img id="star" src="/trail_images/star_outline.png" alt="Add to list icon"/>
            </div>
        </section>
    );
};

export default TrailImg;