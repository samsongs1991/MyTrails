import React from "react";
import ReviewItem from "./review_item.jsx";

const ReviewsList = ({ reviews }) => {

    const getLatestReviews = num => {
        const arr = [];
        for(let id in reviews) {
            const review = reviews[id];
            arr.push(new Date(review.created_at));
        }
        arr.sort((a, b) => b - a);
        return arr.slice(0, num);
    };
    
    return (
        <ol>
            {getLatestReviews(12).map((review, i) => <ReviewItem key={i} review={review}/>)}
        </ol>
    );
};

export default ReviewsList;