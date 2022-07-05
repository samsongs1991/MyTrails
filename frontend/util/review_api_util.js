export const createReview = review => $.ajax({
    url: "api/reviews", 
    method: "POST", 
    data: { review }
});

export const fetchAllReviews = idObj => $.ajax({
    url: "api/reviews",
    method: "GET", 
    data: idObj
});