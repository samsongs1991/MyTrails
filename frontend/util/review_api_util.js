export const createReview = review => $.ajax({
    url: "api/reviews", 
    method: "POST"
});

export const fetchAllReviews = ({ userId, trailId }) => $.ajax({
    url: "api/reviews",
    method: "GET", 
    data: { userId, trailId }
});