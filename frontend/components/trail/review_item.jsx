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
                src={images.star_filled}
                alt="star"
            />
        );
    };

    return (
        <li>
            <div>
                <img src={review.reviewer_img} alt="reviewer photo"/>
                <div>
                    <span>{review.reviewer}</span>
                    <span>{setStars()}<span>{getFormattedDate()}</span></span>
                </div>
            </div>
            <div>{review.text}</div>
        </li>
    );
};

export default ReviewsItem;
