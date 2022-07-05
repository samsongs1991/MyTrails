import React from "react";

const ReviewsItem = ({ review }) => {

    const getFormattedDate = () => {
        const months = [
            "January", "February", "March", 
            "April", "May", "June", 
            "July", "August", "September", 
            "October", "November", "December"
        ];

        const date = new Date(review.created_at);
        const day = date.getDate();
        const mo = date.getMonth();
        const yr = date.getFullYear();

        return `${months[mo]} ${day}, ${yr}`;
    };

    const setStars = () => {
        return [1, 2, 3, 4, 5].map(num => 
            <img
                className={num <= review.rating ? "filled" : ""}
                key={num}
                src="/trail_images/star_filled.png"
                alt="star"
            />
        );
    };
    
    return (
        <li>
            <p>{review.reviewer}</p>
            <div>
                <span>{setStars()}</span>
                <span>{getFormattedDate()}</span>
            </div>
            <p>{review.text}</p>
        </li>
    );
};

export default ReviewsItem;