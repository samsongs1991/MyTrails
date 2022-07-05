import React from "react";
import ReviewItem from "./review_item.jsx";

const ReviewsList = ({ reviews }) => {

    const getLatestReviews = num => {
        const arr = Object.values(reviews);
        arr.sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateB - dateA;
        });
        return arr;
    };
    
    return (
        <ol>
            {getLatestReviews(12).map((review, i) => <ReviewItem key={i} review={review}/>)}
        </ol>
    );
};

export default ReviewsList;