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
    
    return (
        <li>
            {/* name */}
            <p>{review.reviewer}</p>
            {/* star rating : created at */}
            <div>
                <p>stars</p>
                <p>{getFormattedDate()}</p>
            </div>
            {/* text */}
            <p>{review.text}</p>
        </li>
    );
};

export default ReviewsItem;