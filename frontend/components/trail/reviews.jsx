import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form.jsx";
import ReviewsList from "./reviews_list.jsx";
import { fetchAllReviews } from "../../actions/review_actions.js";

const Reviews = ({ signedIn, fetchAllReviews, reviews, trail }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(trail.forecast) {
            fetchAllReviews({ trail_id: trail.id });
        }
    }, [trail]);
    
    const handleNewReview = e => {
        if(signedIn) {
            setShowModal(true);
        } else {
            const msg = e.target.parentElement.children[1];
            msg.classList.add("flash");
            setTimeout(() => {
                msg.classList.remove("flash");
            }, 2000);
        }
    };

    const calcAvgRating = () => {
        let count = 0;
        let sum = 0;
        for(let id in reviews) {
            count++;
            sum += reviews[id].rating
        };
        return count === 0 ? 5 : (sum / count).toFixed(2);
    };

    const getNumReviews = () => {
        let count = 0;
        for(let id in reviews) {
            count++;
        }
        return count;
    };
    
    return (
        <section id="reviews">
            <section>
                <h2>Reviews</h2>
            </section>
            <section>
                <section>
                    <div>
                        <div>
                            <img src="/trail_images/star_filled.png" alt="star icon"/>
                            <p>{calcAvgRating()}</p>
                        </div>
                        <p>{getNumReviews()} Reviews</p>
                    </div>
                    <div>
                        <button onClick={handleNewReview}>Write review</button>
                        <p>Log in to write a review</p>
                    </div>
                </section>
                <ReviewsList reviews={reviews}/>
            </section>
            {showModal ? <ReviewForm setShowModal={setShowModal} trail={trail}/> : null}
        </section>
    );
};

const mSTP = state => ({
    signedIn: Boolean(state.session.id),
    reviews: state.entities.reviews
});

const mDTP = dispatch => ({
    fetchAllReviews: idObj => dispatch(fetchAllReviews(idObj))
});

export default connect(mSTP, mDTP)(Reviews);