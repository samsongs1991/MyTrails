import React from "react";

const ReviewsItem = ({ review }) => {

    const getFormattedDate = () => {
        const date = new Date(review.created_at);
        const day = date.getDay();
        const mo = date.getMonth();
        const yr = date.getFullYear();
        console.log("formatted date", date, day, mo, yr);
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