import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form.jsx";
import { fetchAllReviews } from "../../actions/review_actions.js";

const Reviews = ({ signedIn, fetchAllReviews, trail }) => {
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
    
    return (
        <section id="reviews">
            <section>
                <h2>Reviews</h2>
            </section>
            <section>
                <article>
                    <div>
                        <div>
                            <img src="/trail_images/star_filled.png" alt="star icon"/>
                            <span>Avg Rating</span>
                        </div>
                        <p># Reviews</p>
                    </div>
                    <div>
                        <button onClick={handleNewReview}>Write review</button>
                        <p>Log in to write a review</p>
                    </div>
                </article>
                {/* List of all reviews */}
                {/* Iterate through reviews and
                render a review comp */}
            </section>
            {showModal ? <ReviewForm setShowModal={setShowModal} trail={trail}/> : null}
        </section>
    );
};

const mSTP = state => ({
    signedIn: Boolean(state.session.id)
});

const mDTP = dispatch => ({
    fetchAllReviews: idObj => dispatch(fetchAllReviews(idObj))
});

export default connect(mSTP, mDTP)(Reviews);